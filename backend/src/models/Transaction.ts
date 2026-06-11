import { pool } from '../config/db';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export interface Transaction extends RowDataPacket {
  id: number;
  user_id: number;
  category_id: number | null;
  amount: number;
  type: 'income' | 'expense';
  description: string | null;
  txn_date: string;
  client_uuid: string | null;
  category_name?: string;
  category_color?: string;
  category_icon?: string;
}

interface TransactionInput {
  categoryId?: number | null;
  amount: number;
  type: 'income' | 'expense';
  description?: string | null;
  txnDate: string;
  clientUuid?: string | null;
}

interface TransactionFilters {
  startDate?: string;
  endDate?: string;
  type?: string;
  categoryId?: number;
  limit?: number;
  offset?: number;
}

export const TransactionModel = {
  async findAllByUser(userId: number, filters: TransactionFilters = {}): Promise<Transaction[]> {
    let query = `
      SELECT t.*, c.name AS category_name, c.color AS category_color, c.icon AS category_icon
      FROM transactions t
      LEFT JOIN categories c ON t.category_id = c.id
      WHERE t.user_id = ?
    `;
    const params: any[] = [userId];

    if (filters.startDate) { query += ` AND t.txn_date >= ?`; params.push(filters.startDate); }
    if (filters.endDate) { query += ` AND t.txn_date <= ?`; params.push(filters.endDate); }
    if (filters.type) { query += ` AND t.type = ?`; params.push(filters.type); }
    if (filters.categoryId) { query += ` AND t.category_id = ?`; params.push(filters.categoryId); }

    query += ` ORDER BY t.txn_date DESC, t.id DESC`;

    if (filters.limit) {
      query += ` LIMIT ?`;
      params.push(Number(filters.limit));
      if (filters.offset) {
        query += ` OFFSET ?`;
        params.push(Number(filters.offset));
      }
    }

    const [rows] = await pool.query<Transaction[]>(query, params);
    return rows;
  },

  async findById(id: number, userId: number): Promise<Transaction | null> {
    const [rows] = await pool.query<Transaction[]>(
      `SELECT * FROM transactions WHERE id = ? AND user_id = ?`,
      [id, userId]
    );
    return rows[0] || null;
  },

  async findByClientUuid(clientUuid: string, userId: number): Promise<Transaction | null> {
    const [rows] = await pool.query<Transaction[]>(
      `SELECT * FROM transactions WHERE client_uuid = ? AND user_id = ?`,
      [clientUuid, userId]
    );
    return rows[0] || null;
  },

  async create(userId: number, input: TransactionInput): Promise<Transaction> {
    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO transactions (user_id, category_id, amount, type, description, txn_date, client_uuid)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [userId, input.categoryId || null, input.amount, input.type, input.description || null, input.txnDate, input.clientUuid || null]
    );
    return (await this.findById(result.insertId, userId)) as Transaction;
  },

  async update(id: number, userId: number, input: TransactionInput): Promise<Transaction | null> {
    await pool.query(
      `UPDATE transactions SET category_id = ?, amount = ?, type = ?, description = ?, txn_date = ?
       WHERE id = ? AND user_id = ?`,
      [input.categoryId || null, input.amount, input.type, input.description || null, input.txnDate, id, userId]
    );
    return this.findById(id, userId);
  },

  async delete(id: number, userId: number): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>(
      `DELETE FROM transactions WHERE id = ? AND user_id = ?`,
      [id, userId]
    );
    return result.affectedRows > 0;
  },

  async getSummary(userId: number, monthYear: string): Promise<{ income: number; expense: number; balance: number }> {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT type, COALESCE(SUM(amount), 0) AS total FROM transactions
       WHERE user_id = ? AND DATE_FORMAT(txn_date, '%Y-%m') = ? GROUP BY type`,
      [userId, monthYear]
    );
    const summary = { income: 0, expense: 0, balance: 0 };
    rows.forEach((row: any) => { summary[row.type as 'income' | 'expense'] = Number(row.total); });
    summary.balance = summary.income - summary.expense;
    return summary;
  },

  async getSpendingByCategory(userId: number, monthYear: string): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT c.id AS category_id, c.name AS category_name, c.color AS category_color,
              COALESCE(SUM(t.amount), 0) AS total
       FROM transactions t JOIN categories c ON t.category_id = c.id
       WHERE t.user_id = ? AND t.type = 'expense' AND DATE_FORMAT(t.txn_date, '%Y-%m') = ?
       GROUP BY c.id, c.name, c.color ORDER BY total DESC`,
      [userId, monthYear]
    );
    return rows;
  },

  async getMonthlyTrend(userId: number, months: number = 6): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT DATE_FORMAT(txn_date, '%Y-%m') AS month, type, COALESCE(SUM(amount), 0) AS total
       FROM transactions
       WHERE user_id = ? AND txn_date >= DATE_SUB(CURDATE(), INTERVAL ? MONTH)
       GROUP BY month, type ORDER BY month ASC`,
      [userId, months]
    );
    return rows;
  },

  async bulkCreate(userId: number, transactions: TransactionInput[]): Promise<Transaction[]> {
    const created: Transaction[] = [];
    for (const txn of transactions) {
      if (txn.clientUuid) {
        const existing = await this.findByClientUuid(txn.clientUuid, userId);
        if (existing) { created.push(existing); continue; }
      }
      created.push(await this.create(userId, txn));
    }
    return created;
  }
};
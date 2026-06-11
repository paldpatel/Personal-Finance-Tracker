import { pool } from '../config/db';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export interface Budget extends RowDataPacket {
  id: number;
  user_id: number;
  category_id: number;
  monthly_limit: number;
  month_year: string;
  category_name?: string;
  category_color?: string;
}

export const BudgetModel = {
  async findAllByUser(userId: number, monthYear?: string): Promise<Budget[]> {
    let query = `
      SELECT b.*, c.name AS category_name, c.color AS category_color
      FROM budgets b JOIN categories c ON b.category_id = c.id
      WHERE b.user_id = ?
    `;
    const params: any[] = [userId];
    if (monthYear) { query += ` AND b.month_year = ?`; params.push(monthYear); }
    query += ` ORDER BY c.name`;

    const [rows] = await pool.query<Budget[]>(query, params);
    return rows;
  },

  async upsert(userId: number, categoryId: number, monthlyLimit: number, monthYear: string): Promise<Budget> {
    await pool.query(
      `INSERT INTO budgets (user_id, category_id, monthly_limit, month_year)
       VALUES (?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE monthly_limit = VALUES(monthly_limit)`,
      [userId, categoryId, monthlyLimit, monthYear]
    );
    const [rows] = await pool.query<Budget[]>(
      `SELECT * FROM budgets WHERE user_id = ? AND category_id = ? AND month_year = ?`,
      [userId, categoryId, monthYear]
    );
    return rows[0];
  },

  async delete(id: number, userId: number): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>(
      `DELETE FROM budgets WHERE id = ? AND user_id = ?`,
      [id, userId]
    );
    return result.affectedRows > 0;
  },

  async getExceededBudgets(userId: number, monthYear: string): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT b.id AS budget_id, c.id AS category_id, c.name AS category_name,
              b.monthly_limit, COALESCE(SUM(t.amount), 0) AS spent
       FROM budgets b
       JOIN categories c ON b.category_id = c.id
       LEFT JOIN transactions t ON t.category_id = c.id AND t.user_id = b.user_id
            AND t.type = 'expense' AND DATE_FORMAT(t.txn_date, '%Y-%m') = b.month_year
       WHERE b.user_id = ? AND b.month_year = ?
       GROUP BY b.id, c.id, c.name, b.monthly_limit
       HAVING spent >= b.monthly_limit`,
      [userId, monthYear]
    );
    return rows;
  }
};
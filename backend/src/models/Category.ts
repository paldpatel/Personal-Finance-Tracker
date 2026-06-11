import { pool } from '../config/db';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export interface Category extends RowDataPacket {
  id: number;
  user_id: number;
  name: string;
  type: 'income' | 'expense';
  color: string;
  icon: string;
  created_at: string;
}

interface CategoryInput {
  name: string;
  type: 'income' | 'expense';
  color?: string;
  icon?: string;
}

export const CategoryModel = {
  async findAllByUser(userId: number): Promise<Category[]> {
    const [rows] = await pool.query<Category[]>(
      `SELECT * FROM categories WHERE user_id = ? ORDER BY type, name`,
      [userId]
    );
    return rows;
  },

  async findById(id: number, userId: number): Promise<Category | null> {
    const [rows] = await pool.query<Category[]>(
      `SELECT * FROM categories WHERE id = ? AND user_id = ?`,
      [id, userId]
    );
    return rows[0] || null;
  },

  async create(userId: number, input: CategoryInput): Promise<Category> {
    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO categories (user_id, name, type, color, icon) VALUES (?, ?, ?, ?, ?)`,
      [userId, input.name, input.type, input.color || '#6366f1', input.icon || 'tag']
    );
    return (await this.findById(result.insertId, userId)) as Category;
  },

  async update(id: number, userId: number, input: CategoryInput): Promise<Category | null> {
    await pool.query(
      `UPDATE categories SET name = ?, type = ?, color = ?, icon = ? WHERE id = ? AND user_id = ?`,
      [input.name, input.type, input.color, input.icon, id, userId]
    );
    return this.findById(id, userId);
  },

  async delete(id: number, userId: number): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>(
      `DELETE FROM categories WHERE id = ? AND user_id = ?`,
      [id, userId]
    );
    return result.affectedRows > 0;
  }
};
import { pool } from '../config/db';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export interface User {
  id: number;
  email: string;
  password_hash: string;
  first_name: string | null;
  last_name: string | null;
  role: 'user' | 'admin';
  created_at: string;
}

export interface SafeUser {
  id: number;
  email: string;
  first_name: string | null;
  last_name: string | null;
  role: 'user' | 'admin';
  created_at: string;
}

interface CreateUserInput {
  email: string;
  passwordHash: string;
  firstName?: string;
  lastName?: string;
}

export const UserModel = {
  async create(input: CreateUserInput): Promise<SafeUser> {
    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO users (email, password_hash, first_name, last_name) VALUES (?, ?, ?, ?)`,
      [input.email, input.passwordHash, input.firstName || null, input.lastName || null]
    );
    const created = await this.findById(result.insertId);
    return created as SafeUser;
  },

  async findByEmail(email: string): Promise<User | null> {
    const [rows] = await pool.query<(User & RowDataPacket)[]>(
      `SELECT * FROM users WHERE email = ?`,
      [email]
    );
    return rows[0] || null;
  },

  async findById(id: number): Promise<SafeUser | null> {
    const [rows] = await pool.query<(SafeUser & RowDataPacket)[]>(
      `SELECT id, email, first_name, last_name, role, created_at FROM users WHERE id = ?`,
      [id]
    );
    return rows[0] || null;
  },

  async storeRefreshToken(userId: number, token: string, expiresAt: string): Promise<void> {
    await pool.query(
      `INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, ?)`,
      [userId, token, expiresAt]
    );
  },

  async findRefreshToken(token: string): Promise<RowDataPacket | null> {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT * FROM refresh_tokens WHERE token = ? AND expires_at > NOW()`,
      [token]
    );
    return rows[0] || null;
  },

  async deleteRefreshToken(token: string): Promise<void> {
    await pool.query(`DELETE FROM refresh_tokens WHERE token = ?`, [token]);
  }
};
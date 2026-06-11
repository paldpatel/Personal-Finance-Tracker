import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { UserModel } from '../models/User';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../utils/jwt';

const REFRESH_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function toMySQLDateTime(date: Date): string {
  return date.toISOString().slice(0, 19).replace('T', ' ');
}

export async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password, firstName, lastName } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    const existing = await UserModel.findByEmail(email);
    if (existing) {
      return res.status(409).json({ error: 'An account with this email already exists' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await UserModel.create({ email, passwordHash, firstName, lastName });

    const accessToken = signAccessToken({ id: user.id, email: user.email, role: user.role });
    const refreshToken = signRefreshToken({ id: user.id });
    await UserModel.storeRefreshToken(user.id, refreshToken, toMySQLDateTime(new Date(Date.now() + REFRESH_EXPIRY_MS)));

    res.status(201).json({ user, accessToken, refreshToken });
  } catch (err) {
    next(err);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await UserModel.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const accessToken = signAccessToken({ id: user.id, email: user.email, role: user.role });
    const refreshToken = signRefreshToken({ id: user.id });
    await UserModel.storeRefreshToken(user.id, refreshToken, toMySQLDateTime(new Date(Date.now() + REFRESH_EXPIRY_MS)));

    const { password_hash, ...safeUser } = user;
    res.json({ user: safeUser, accessToken, refreshToken });
  } catch (err) {
    next(err);
  }
}

export async function refresh(req: Request, res: Response, next: NextFunction) {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({ error: 'Refresh token required' });
    }

    const stored = await UserModel.findRefreshToken(refreshToken);
    if (!stored) {
      return res.status(403).json({ error: 'Invalid or expired refresh token' });
    }

    const decoded = verifyRefreshToken(refreshToken);
    const user = await UserModel.findById(decoded.id);
    if (!user) {
      return res.status(403).json({ error: 'User not found' });
    }

    const accessToken = signAccessToken({ id: user.id, email: user.email, role: user.role });
    res.json({ accessToken });
  } catch {
    res.status(403).json({ error: 'Invalid or expired refresh token' });
  }
}

export async function logout(req: Request, res: Response, next: NextFunction) {
  try {
    const { refreshToken } = req.body;
    if (refreshToken) {
      await UserModel.deleteRefreshToken(refreshToken);
    }
    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    next(err);
  }
}

export async function me(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await UserModel.findById(req.user!.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user });
  } catch (err) {
    next(err);
  }
}
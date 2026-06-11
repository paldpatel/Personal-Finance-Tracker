import { Request, Response, NextFunction } from 'express';
import { CategoryModel } from '../models/Category';

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const categories = await CategoryModel.findAllByUser(req.user!.id);
    res.json({ categories });
  } catch (err) {
    next(err);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, type, color, icon } = req.body;
    if (!name || !type) {
      return res.status(400).json({ error: 'name and type are required' });
    }
    if (!['income', 'expense'].includes(type)) {
      return res.status(400).json({ error: 'type must be income or expense' });
    }
    const category = await CategoryModel.create(req.user!.id, { name, type, color, icon });
    res.status(201).json({ category });
  } catch (err: any) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Category already exists' });
    }
    next(err);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const existing = await CategoryModel.findById(Number(id), req.user!.id);
    if (!existing) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const { name, type, color, icon } = req.body;
    const category = await CategoryModel.update(Number(id), req.user!.id, {
      name: name ?? existing.name,
      type: type ?? existing.type,
      color: color ?? existing.color,
      icon: icon ?? existing.icon
    });
    res.json({ category });
  } catch (err) {
    next(err);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const deleted = await CategoryModel.delete(Number(req.params.id), req.user!.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
import { Request, Response, NextFunction } from 'express';
import { BudgetModel } from '../models/Budget';

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const budgets = await BudgetModel.findAllByUser(req.user!.id, req.query.month as string);
    res.json({ budgets });
  } catch (err) { next(err); }
}

export async function upsert(req: Request, res: Response, next: NextFunction) {
  try {
    const { categoryId, monthlyLimit, monthYear } = req.body;
    if (!categoryId || monthlyLimit === undefined || !monthYear) {
      return res.status(400).json({ error: 'categoryId, monthlyLimit, and monthYear are required' });
    }
    if (!/^\d{4}-\d{2}$/.test(monthYear)) {
      return res.status(400).json({ error: 'monthYear must be in YYYY-MM format' });
    }
    const budget = await BudgetModel.upsert(req.user!.id, categoryId, monthlyLimit, monthYear);
    res.status(201).json({ budget });
  } catch (err) { next(err); }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const deleted = await BudgetModel.delete(Number(req.params.id), req.user!.id);
    if (!deleted) return res.status(404).json({ error: 'Budget not found' });
    res.status(204).send();
  } catch (err) { next(err); }
}
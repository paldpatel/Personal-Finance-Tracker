import { Request, Response, NextFunction } from 'express';
import { TransactionModel } from '../models/Transaction';
import { publishToUser } from '../services/sseService';
import { checkAndNotifyBudgets } from '../services/budgetAlertService';

function validatePayload(body: any): string | null {
  const { amount, type, txnDate } = body;
  if (amount === undefined || amount === null || isNaN(Number(amount))) return 'amount must be a valid number';
  if (!['income', 'expense'].includes(type)) return 'type must be income or expense';
  if (!txnDate) return 'txnDate is required (YYYY-MM-DD)';
  return null;
}

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const { startDate, endDate, type, categoryId, limit, offset } = req.query;
    const transactions = await TransactionModel.findAllByUser(req.user!.id, {
      startDate: startDate as string,
      endDate: endDate as string,
      type: type as string,
      categoryId: categoryId ? Number(categoryId) : undefined,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined
    });
    res.json({ transactions });
  } catch (err) { next(err); }
}

export async function getOne(req: Request, res: Response, next: NextFunction) {
  try {
    const transaction = await TransactionModel.findById(Number(req.params.id), req.user!.id);
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
    res.json({ transaction });
  } catch (err) { next(err); }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const error = validatePayload(req.body);
    if (error) return res.status(400).json({ error });

    const { categoryId, amount, type, description, txnDate, clientUuid } = req.body;
    const transaction = await TransactionModel.create(req.user!.id, { categoryId, amount, type, description, txnDate, clientUuid });

    publishToUser(req.user!.id, 'transaction:created', transaction);
    if (type === 'expense') await checkAndNotifyBudgets(req.user!.id, txnDate);

    res.status(201).json({ transaction });
  } catch (err: any) {
    if (err.code === 'ER_DUP_ENTRY') {
      const existing = await TransactionModel.findByClientUuid(req.body.clientUuid, req.user!.id);
      return res.status(200).json({ transaction: existing, deduplicated: true });
    }
    next(err);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const existing = await TransactionModel.findById(Number(req.params.id), req.user!.id);
    if (!existing) return res.status(404).json({ error: 'Transaction not found' });

    const error = validatePayload(req.body);
    if (error) return res.status(400).json({ error });

    const { categoryId, amount, type, description, txnDate } = req.body;
    const transaction = await TransactionModel.update(Number(req.params.id), req.user!.id, { categoryId, amount, type, description, txnDate });

    publishToUser(req.user!.id, 'transaction:updated', transaction);
    if (type === 'expense') await checkAndNotifyBudgets(req.user!.id, txnDate);

    res.json({ transaction });
  } catch (err) { next(err); }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const deleted = await TransactionModel.delete(Number(req.params.id), req.user!.id);
    if (!deleted) return res.status(404).json({ error: 'Transaction not found' });
    publishToUser(req.user!.id, 'transaction:deleted', { id: Number(req.params.id) });
    res.status(204).send();
  } catch (err) { next(err); }
}

export async function bulkSync(req: Request, res: Response, next: NextFunction) {
  try {
    const { transactions } = req.body;
    if (!Array.isArray(transactions)) return res.status(400).json({ error: 'transactions must be an array' });

    for (const txn of transactions) {
      const error = validatePayload(txn);
      if (error) return res.status(400).json({ error: `Invalid transaction (${txn.clientUuid || 'unknown'}): ${error}` });
    }

    const created = await TransactionModel.bulkCreate(req.user!.id, transactions);
    publishToUser(req.user!.id, 'transactions:synced', { count: created.length });
    res.status(201).json({ transactions: created });
  } catch (err) { next(err); }
}

export async function getDashboard(req: Request, res: Response, next: NextFunction) {
  try {
    const monthYear = (req.query.month as string) || new Date().toISOString().slice(0, 7);
    const months = req.query.months ? Number(req.query.months) : 6;

    const [summary, spendingByCategory, monthlyTrend] = await Promise.all([
      TransactionModel.getSummary(req.user!.id, monthYear),
      TransactionModel.getSpendingByCategory(req.user!.id, monthYear),
      TransactionModel.getMonthlyTrend(req.user!.id, months)
    ]);

    res.json({ monthYear, summary, spendingByCategory, monthlyTrend });
  } catch (err) { next(err); }
}
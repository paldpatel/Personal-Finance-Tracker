import { BudgetModel } from '../models/Budget';
import { publishToUser } from './sseService';

export async function checkAndNotifyBudgets(userId: number, txnDate: string): Promise<void> {
  const monthYear = txnDate.slice(0, 7);
  const exceeded = await BudgetModel.getExceededBudgets(userId, monthYear);

  for (const budget of exceeded) {
    publishToUser(userId, 'budget:exceeded', {
      budgetId: budget.budget_id,
      categoryId: budget.category_id,
      categoryName: budget.category_name,
      limit: Number(budget.monthly_limit),
      spent: Number(budget.spent),
      monthYear
    });
  }
}
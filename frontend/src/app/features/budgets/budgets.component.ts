import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from '../../core/services/budget.service';
import { CategoryService } from '../../core/services/category.service';
import { TransactionService } from '../../core/services/transaction.service';
import { Budget, Category } from '../../core/models';

@Component({
  selector: 'app-budgets',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './budgets.component.html'
})
export class BudgetsComponent implements OnInit {
  budgets: Budget[] = [];
  categories: Category[] = [];
  spending: Record<number, number> = {};
  loading = false;
  showForm = false;
  form: FormGroup;
  error = '';
  selectedMonth = new Date().toISOString().slice(0, 7);

  constructor(
    private budgetService: BudgetService,
    private catService: CategoryService,
    private txnService: TransactionService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      category_id: ['', Validators.required],
      monthly_limit: ['', [Validators.required, Validators.min(1)]],
      month_year: [this.selectedMonth, Validators.required]
    });
  }

  ngOnInit(): void { this.catService.getAll().subscribe(c => this.categories = c); this.load(); }

  load(): void {
    this.loading = true;
    this.budgetService.getAll(this.selectedMonth).subscribe({ next: b => { this.budgets = b; this.loading = false; this.loadSpending(); }, error: () => this.loading = false });
  }

  loadSpending(): void {
    this.txnService.getDashboard(this.selectedMonth).subscribe(data => {
      this.spending = {};
      data.spendingByCategory.forEach(c => { this.spending[c.category_id] = Number(c.total); });
    });
  }

  getSpent(budget: Budget): number { return this.spending[budget.category_id] || 0; }
  getPct(budget: Budget): number { return Math.min((this.getSpent(budget) / budget.monthly_limit) * 100, 100); }
  getPctClass(budget: Budget): string { const p = this.getPct(budget); return p >= 100 ? 'danger' : p >= 80 ? 'warning' : ''; }

  expenseCategories(): Category[] { return this.categories.filter(c => c.type === 'expense'); }

  save(): void {
    if (this.form.invalid) return;
    this.loading = true; this.error = '';
    const v = this.form.value;
    this.budgetService.upsert(Number(v.category_id), Number(v.monthly_limit), v.month_year).subscribe({
      next: () => { this.showForm = false; this.load(); },
      error: (err) => { this.error = err.error?.error || 'Failed to save.'; this.loading = false; }
    });
  }

  delete(id: number): void { if (!confirm('Delete this budget?')) return; this.budgetService.delete(id).subscribe(() => this.load()); }

  fmt(n: number): string { return '₹' + Number(n || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 }); }
}
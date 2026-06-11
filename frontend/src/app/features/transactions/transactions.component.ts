import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../core/services/transaction.service';
import { CategoryService } from '../../core/services/category.service';
import { Transaction, Category } from '../../core/models';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './transactions.component.html'
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  categories: Category[] = [];
  loading = false;
  showForm = false;
  editingId: number | null = null;
  form: FormGroup;
  error = '';
  filterType = '';
  filterStart = '';
  filterEnd = '';

  constructor(
    private txnService: TransactionService,
    private catService: CategoryService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      type: ['expense', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      category_id: [null],
      description: [''],
      txn_date: [new Date().toISOString().slice(0, 10), Validators.required]
    });
  }

  ngOnInit(): void { this.catService.getAll().subscribe(c => this.categories = c); this.load(); }

  load(): void {
    this.loading = true;
    const filters: any = {};
    if (this.filterType) filters.type = this.filterType;
    if (this.filterStart) filters.startDate = this.filterStart;
    if (this.filterEnd) filters.endDate = this.filterEnd;
    this.txnService.getAll(filters).subscribe({ next: t => { this.transactions = t; this.loading = false; }, error: () => this.loading = false });
  }

  catsForType(): Category[] { return this.categories.filter(c => c.type === this.form.value.type); }

  openNew(): void { this.editingId = null; this.form.reset({ type: 'expense', txn_date: new Date().toISOString().slice(0, 10) }); this.showForm = true; this.error = ''; }

  openEdit(txn: Transaction): void {
    this.editingId = txn.id;
    this.form.patchValue({ type: txn.type, amount: txn.amount, category_id: txn.category_id, description: txn.description, txn_date: txn.txn_date?.slice(0, 10) });
    this.showForm = true; this.error = '';
  }

  save(): void {
    if (this.form.invalid) return;
    this.loading = true; this.error = '';
    const v = this.form.value;
    const payload: any = { type: v.type, amount: Number(v.amount), category_id: v.category_id || null, description: v.description || null, txnDate: v.txn_date, txn_date: v.txn_date };
    const obs = this.editingId ? this.txnService.update(this.editingId, payload) : this.txnService.create(payload);
    obs.subscribe({ next: () => { this.showForm = false; this.load(); this.loading = false; }, error: (err) => { this.error = err.error?.error || 'Failed to save.'; this.loading = false; } });
  }

  delete(id: number): void { if (!confirm('Delete this transaction?')) return; this.txnService.delete(id).subscribe(() => this.load()); }

  fmt(n: number): string { return '₹' + Number(n || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 }); }
}
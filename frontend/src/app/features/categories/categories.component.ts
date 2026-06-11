import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../core/services/category.service';
import { Category } from '../../core/models';

const COLORS = ['#6366f1','#22c55e','#f43f5e','#f59e0b','#3b82f6','#8b5cf6','#06b6d4','#ec4899'];

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  loading = false;
  showForm = false;
  editingId: number | null = null;
  form: FormGroup;
  error = '';
  colors = COLORS;

  constructor(private catService: CategoryService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: ['expense', Validators.required],
      color: [COLORS[0], Validators.required],
      icon: ['tag']
    });
  }

  ngOnInit(): void { this.load(); }
  load(): void { this.loading = true; this.catService.getAll().subscribe({ next: c => { this.categories = c; this.loading = false; }, error: () => this.loading = false }); }

  income(): Category[] { return this.categories.filter(c => c.type === 'income'); }
  expense(): Category[] { return this.categories.filter(c => c.type === 'expense'); }

  openNew(): void { this.editingId = null; this.form.reset({ type: 'expense', color: COLORS[0], icon: 'tag' }); this.showForm = true; this.error = ''; }
  openEdit(c: Category): void { this.editingId = c.id; this.form.patchValue({ name: c.name, type: c.type, color: c.color, icon: c.icon }); this.showForm = true; this.error = ''; }

  save(): void {
    if (this.form.invalid) return;
    this.loading = true; this.error = '';
    const obs = this.editingId ? this.catService.update(this.editingId, this.form.value) : this.catService.create(this.form.value);
    obs.subscribe({ next: () => { this.showForm = false; this.load(); }, error: (err) => { this.error = err.error?.error || 'Failed to save.'; this.loading = false; } });
  }

  delete(id: number): void { if (!confirm('Delete this category?')) return; this.catService.delete(id).subscribe({ next: () => this.load(), error: (err) => alert(err.error?.error || 'Cannot delete — category may be in use.') }); }
}
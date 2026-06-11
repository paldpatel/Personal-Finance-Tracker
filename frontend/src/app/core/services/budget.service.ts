import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { Budget } from '../models';
import { IndexedDbService } from './indexed-db.service';

const API = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class BudgetService {
  constructor(private http: HttpClient, private idb: IndexedDbService) {}

  getAll(month?: string): Observable<Budget[]> {
    let params = new HttpParams();
    if (month) params = params.set('month', month);
    return this.http.get<{ budgets: Budget[] }>(`${API}/budgets`, { params }).pipe(
      tap(res => this.idb.cacheBudgets(res.budgets)),
      switchMap(res => of(res.budgets)),
      catchError(() => from(this.idb.getCachedBudgets()))
    );
  }

  upsert(categoryId: number, monthlyLimit: number, monthYear: string): Observable<Budget> {
    return this.http.post<{ budget: Budget }>(`${API}/budgets`, { categoryId, monthlyLimit, monthYear })
      .pipe(switchMap(res => of(res.budget)));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${API}/budgets/${id}`);
  }
}
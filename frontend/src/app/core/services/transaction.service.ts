import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { Transaction, DashboardData, TransactionFilters } from '../models';
import { IndexedDbService } from './indexed-db.service';
import { v4 as uuidv4 } from 'uuid';

const API = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  isOnline = navigator.onLine;

  constructor(private http: HttpClient, private idb: IndexedDbService) {
    window.addEventListener('online', () => { this.isOnline = true; this.syncPendingTransactions(); });
    window.addEventListener('offline', () => { this.isOnline = false; });
  }

  getAll(filters: TransactionFilters = {}): Observable<Transaction[]> {
    if (!this.isOnline) return from(this.idb.getCachedTransactions());

    let params = new HttpParams();
    if (filters.startDate) params = params.set('startDate', filters.startDate);
    if (filters.endDate) params = params.set('endDate', filters.endDate);
    if (filters.type) params = params.set('type', filters.type);
    if (filters.categoryId) params = params.set('categoryId', String(filters.categoryId));
    if (filters.limit) params = params.set('limit', String(filters.limit));
    if (filters.offset) params = params.set('offset', String(filters.offset));

    return this.http.get<{ transactions: Transaction[] }>(`${API}/transactions`, { params }).pipe(
      tap(res => this.idb.cacheTransactions(res.transactions)),
      switchMap(res => of(res.transactions)),
      catchError(() => from(this.idb.getCachedTransactions()))
    );
  }

  create(data: Omit<Transaction, 'id' | 'user_id' | 'created_at'>): Observable<Transaction> {
    const clientUuid = data.client_uuid || uuidv4();
    const txnWithUuid = { ...data, client_uuid: clientUuid };

    if (!this.isOnline) {
      const offlineTxn: Transaction = { ...txnWithUuid, id: Date.now(), user_id: 0, synced: false };
      return from(this.idb.savePendingTransaction(offlineTxn).then(() => offlineTxn));
    }

    return this.http.post<{ transaction: Transaction }>(`${API}/transactions`, txnWithUuid)
      .pipe(switchMap(res => of(res.transaction)));
  }

  update(id: number, data: Partial<Transaction>): Observable<Transaction> {
    return this.http.put<{ transaction: Transaction }>(`${API}/transactions/${id}`, data)
      .pipe(switchMap(res => of(res.transaction)));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${API}/transactions/${id}`);
  }

  getDashboard(monthYear?: string, months = 6): Observable<DashboardData> {
    let params = new HttpParams().set('months', String(months));
    if (monthYear) params = params.set('month', monthYear);
    return this.http.get<DashboardData>(`${API}/transactions/dashboard`, { params });
  }

  async syncPendingTransactions(): Promise<void> {
    const pending = await this.idb.getUnsyncedTransactions();
    if (!pending.length) return;

    const mapped = pending.map(t => ({
      categoryId: t.category_id,
      amount: t.amount,
      type: t.type,
      description: t.description,
      txnDate: t.txn_date,
      clientUuid: t.client_uuid
    }));

    this.http.post<{ transactions: Transaction[] }>(`${API}/transactions/sync`, { transactions: mapped })
      .subscribe(async res => {
        for (const t of res.transactions) {
          if (t.client_uuid) await this.idb.markTransactionSynced(t.client_uuid);
        }
      });
  }
}
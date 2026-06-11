import { Injectable } from '@angular/core';
import { Transaction, Category, Budget } from '../models';

const DB_NAME = 'finance_tracker';
const DB_VERSION = 1;

@Injectable({ providedIn: 'root' })
export class IndexedDbService {
  private db: IDBDatabase | null = null;

  async open(): Promise<IDBDatabase> {
    if (this.db) return this.db;
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        if (!db.objectStoreNames.contains('pending_transactions')) {
          const store = db.createObjectStore('pending_transactions', { keyPath: 'client_uuid' });
          store.createIndex('synced', 'synced', { unique: false });
        }
        if (!db.objectStoreNames.contains('transactions')) {
          const store = db.createObjectStore('transactions', { keyPath: 'id' });
          store.createIndex('txn_date', 'txn_date', { unique: false });
        }
        if (!db.objectStoreNames.contains('categories')) {
          db.createObjectStore('categories', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('budgets')) {
          db.createObjectStore('budgets', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('meta')) {
          db.createObjectStore('meta', { keyPath: 'key' });
        }
      };

      request.onsuccess = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        resolve(this.db);
      };
      request.onerror = () => reject(request.error);
    });
  }

  private async tx(storeName: string, mode: IDBTransactionMode): Promise<IDBObjectStore> {
    const db = await this.open();
    return db.transaction(storeName, mode).objectStore(storeName);
  }

  private wrap<T>(request: IDBRequest<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // --- Pending (offline) transactions ---

  async savePendingTransaction(txn: Transaction): Promise<void> {
    const store = await this.tx('pending_transactions', 'readwrite');
    await this.wrap(store.put({ ...txn, synced: false }));
  }

  async getUnsyncedTransactions(): Promise<Transaction[]> {
    const store = await this.tx('pending_transactions', 'readonly');
    const index = store.index('synced');
    return this.wrap(index.getAll(IDBKeyRange.only(false))) as Promise<Transaction[]>;
  }

  async markTransactionSynced(clientUuid: string): Promise<void> {
    const store = await this.tx('pending_transactions', 'readwrite');
    const txn = await this.wrap(store.get(clientUuid)) as Transaction;
    if (txn) await this.wrap(store.put({ ...txn, synced: true }));
  }

  // --- Cached transactions ---

  async cacheTransactions(transactions: Transaction[]): Promise<void> {
    const store = await this.tx('transactions', 'readwrite');
    for (const txn of transactions) store.put(txn);
  }

  async getCachedTransactions(): Promise<Transaction[]> {
    const store = await this.tx('transactions', 'readonly');
    return this.wrap(store.getAll()) as Promise<Transaction[]>;
  }

  // --- Categories ---

  async cacheCategories(categories: Category[]): Promise<void> {
    const store = await this.tx('categories', 'readwrite');
    await this.wrap(store.clear());
    for (const cat of categories) store.put(cat);
  }

  async getCachedCategories(): Promise<Category[]> {
    const store = await this.tx('categories', 'readonly');
    return this.wrap(store.getAll()) as Promise<Category[]>;
  }

  // --- Budgets ---

  async cacheBudgets(budgets: Budget[]): Promise<void> {
    const store = await this.tx('budgets', 'readwrite');
    await this.wrap(store.clear());
    for (const b of budgets) store.put(b);
  }

  async getCachedBudgets(): Promise<Budget[]> {
    const store = await this.tx('budgets', 'readonly');
    return this.wrap(store.getAll()) as Promise<Budget[]>;
  }

  // --- Meta ---

  async setMeta(key: string, value: any): Promise<void> {
    const store = await this.tx('meta', 'readwrite');
    await this.wrap(store.put({ key, value }));
  }

  async getMeta(key: string): Promise<any> {
    const store = await this.tx('meta', 'readonly');
    const result = await this.wrap(store.get(key)) as { key: string; value: any } | undefined;
    return result?.value ?? null;
  }
}
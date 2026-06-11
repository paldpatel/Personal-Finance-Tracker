import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { Category } from '../models';
import { IndexedDbService } from './indexed-db.service';

const API = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private http: HttpClient, private idb: IndexedDbService) {}

  getAll(): Observable<Category[]> {
    return this.http.get<{ categories: Category[] }>(`${API}/categories`).pipe(
      tap(res => this.idb.cacheCategories(res.categories)),
      switchMap(res => of(res.categories)),
      catchError(() => from(this.idb.getCachedCategories()))
    );
  }

  create(data: Partial<Category>): Observable<Category> {
    return this.http.post<{ category: Category }>(`${API}/categories`, data)
      .pipe(switchMap(res => of(res.category)));
  }

  update(id: number, data: Partial<Category>): Observable<Category> {
    return this.http.put<{ category: Category }>(`${API}/categories/${id}`, data)
      .pipe(switchMap(res => of(res.category)));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${API}/categories/${id}`);
  }
}
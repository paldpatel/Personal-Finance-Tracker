import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { User, AuthResponse } from '../models';

const API = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser = signal<User | null>(null);
  private _accessToken: string | null = null;

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('accessToken');
    const user = localStorage.getItem('user');
    if (token && user) {
      this._accessToken = token;
      this.currentUser.set(JSON.parse(user));
    }
  }

  get accessToken(): string | null { return this._accessToken; }
  get isLoggedIn(): boolean { return !!this._accessToken; }

  register(email: string, password: string, firstName?: string, lastName?: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API}/auth/register`, { email, password, firstName, lastName })
      .pipe(tap(res => this.persistSession(res)));
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API}/auth/login`, { email, password })
      .pipe(tap(res => this.persistSession(res)));
  }

  refreshToken(): Observable<{ accessToken: string }> {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post<{ accessToken: string }>(`${API}/auth/refresh`, { refreshToken }).pipe(
      tap(res => {
        this._accessToken = res.accessToken;
        localStorage.setItem('accessToken', res.accessToken);
      }),
      catchError(err => { this.logout(); return throwError(() => err); })
    );
  }

  logout(): void {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      this.http.post(`${API}/auth/logout`, { refreshToken }).subscribe();
    }
    this._accessToken = null;
    this.currentUser.set(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

  private persistSession(res: AuthResponse): void {
    this._accessToken = res.accessToken;
    this.currentUser.set(res.user);
    localStorage.setItem('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    localStorage.setItem('user', JSON.stringify(res.user));
  }
}
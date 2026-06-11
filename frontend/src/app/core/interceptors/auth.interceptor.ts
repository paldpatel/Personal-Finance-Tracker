import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { throwError, catchError, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.accessToken;

  const cloned = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(cloned).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401 && !req.url.includes('/auth/')) {
        return auth.refreshToken().pipe(
          switchMap(res => {
            const retried = req.clone({ setHeaders: { Authorization: `Bearer ${res.accessToken}` } });
            return next(retried);
          }),
          catchError(refreshErr => { auth.logout(); return throwError(() => refreshErr); })
        );
      }
      return throwError(() => err);
    })
  );
};
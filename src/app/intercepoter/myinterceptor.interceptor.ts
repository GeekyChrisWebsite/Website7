import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const cookies = inject(CookieService);
  const token = cookies.get('token');
  if (cookies.get('token')) {
    let authReq = req.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
      },
    });
    return next(authReq);
  } else {
    return next(req.clone());
  }
};
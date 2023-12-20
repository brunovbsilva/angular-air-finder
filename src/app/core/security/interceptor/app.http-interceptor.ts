import {
  HttpContextToken,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { Observable, catchError, retry, throwError, timer } from 'rxjs';

export const WindowToken     = new InjectionToken('Window');
export const skipBearerToken = new HttpContextToken(() => false)
export const tokenKey = 'token';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() { }

  public intercept(
    request: HttpRequest<any>,
    next   : HttpHandler
    )      : Observable<HttpEvent<any>> {

    if (!request.context.get(skipBearerToken)) {
      request = request.clone({
        setHeaders: {
          'Authorization'  : `Bearer ${this.getToken()}`,
          'Accept-Language': this.getLang(),
        },
      });
    }

    return next.handle(request).pipe(
      retry({
        count: 2,
        delay: () => timer(200),
      }),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse){
    if (err.status === 401){
      localStorage.removeItem(tokenKey);
    }
    
    return throwError(() => err);
  }

  private getToken() {
    return localStorage.getItem(tokenKey);
  }

  private getLang() {
    return 'pt-BR';
  }
}

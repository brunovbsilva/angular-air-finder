import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
  
@Injectable()
export class AppDevInterceptor implements HttpInterceptor {
    
    constructor() { }
  
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(catchError(this.handleError));
    }
  
    private handleError(err: HttpErrorResponse){
        console.log('dev', err);
        if (err.error instanceof ErrorEvent) {
            console.warn(`Client error: ${err.error.message}`);
        } else {
            console.warn(`Server error: (${err.status}) ${err.message}`);
        }
        return throwError(() => err);
    }
}
  
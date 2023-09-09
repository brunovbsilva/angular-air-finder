import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export const horPos = 'end';
export const verPos = 'top';
  
@Injectable()
export class AppSnackbarInterceptor implements HttpInterceptor {
    
    constructor(private _snackBar: MatSnackBar) { }
  
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                tap({
                    error: (err) => { 
                        if(err.status === 401) this.openSnackBar('Unauthorized');
                        else this.openSnackBar(err.error.error.message);
                    }
                }),
                catchError(this.handleError)
            );
    }
  
    private handleError(err: HttpErrorResponse){
        return throwError(() => err);
    }

    private openSnackBar(msg: string, act: string = ''){
        this._snackBar.open(msg, act, {
            duration: 2000,
            horizontalPosition: horPos,
            verticalPosition: verPos
        }); 
    }
}
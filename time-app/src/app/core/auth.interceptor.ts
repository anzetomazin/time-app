import { Injectable, Type } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenService } from './token.service';
import { SnackbarService } from './snackbar.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
    private snackbarService: SnackbarService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = this.tokenService.getToken();
    const authReq = request.clone({
      setHeaders: { 
        Authorization: `SpicaToken ${token}`,
        Accept: '*/*',
        'Content-Type': 'application/json'
      }
    })
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.snackbarService.openSnackBar('Unauthorized! Insert a valid token.', 'Settings', 'error');
        } else {
          return throwError(error);
        }
      })
    );
  }
}

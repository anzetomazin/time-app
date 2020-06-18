import { Injectable, Type } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = this.tokenService.getToken();
    const authReq = request.clone({
      setHeaders: { 
        Authorization: `SpicaToken ${token}`,
        Accept: '*/*'
      }
    })
    return next.handle(authReq);
  }
}

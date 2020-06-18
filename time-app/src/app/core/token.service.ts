import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token): void {
    window.localStorage.setItem('token', token);
  }

  getToken(): string {
    return window.localStorage.getItem('token');
  }
}

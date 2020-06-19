import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private snackbarService: SnackbarService
  ) { }

  setToken(token: string): void {
    window.localStorage.setItem('token', token);
    this.snackbarService.openSnackBar('Token successfully stored.', 'Dismiss', 'success');
  }

  getToken(): string {
    return window.localStorage.getItem('token');
  }
}

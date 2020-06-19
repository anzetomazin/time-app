import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  private panelClassMap = {
    'success': 'success-snackbar',
    'error': 'error-snackbar'
  }

  private actionDurationsMap = {
    'Settings': 10000,
    'Dismiss': 3000
  }

  openSnackBar(message: string, action: string, type: string) {
    let snackbar = this._snackBar.open(message, action, {
      duration: this.actionDurationsMap[action],
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [this.panelClassMap[type]]
    });
    if (action === 'Settings') {
      snackbar.onAction().subscribe( data => {
        this.router.navigateByUrl('settings');
      });
    }
  }
}

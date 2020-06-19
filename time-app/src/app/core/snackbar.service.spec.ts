import { TestBed } from '@angular/core/testing';
import { SnackbarService } from './snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';



describe('SnackbarService', () => {
  let service: SnackbarService;

  beforeEach( async () => {
    TestBed.configureTestingModule({imports: [MatSnackBarModule, RouterTestingModule]});
    service = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

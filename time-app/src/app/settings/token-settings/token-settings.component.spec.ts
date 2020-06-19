import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenSettingsComponent } from './token-settings.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TokenSettingsComponent', () => {
  let component: TokenSettingsComponent;
  let fixture: ComponentFixture<TokenSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenSettingsComponent ],
      imports: [ MatSnackBarModule, RouterTestingModule, FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

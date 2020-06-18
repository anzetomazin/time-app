import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { TokenSettingsComponent } from './token-settings/token-settings.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [TokenSettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SettingsModule { }

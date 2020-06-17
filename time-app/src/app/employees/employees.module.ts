import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { PresentListComponent } from './present-list/present-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeAddComponent, PresentListComponent, EmployeeListComponent, EmployeeAddComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }

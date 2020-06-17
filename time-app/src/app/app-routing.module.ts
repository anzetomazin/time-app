import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { PresentListComponent } from './employees/present-list/present-list.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';


const routes: Routes = [
    {
      path: 'employees',
      loadChildren: () =>
          import('./employees/employees.module').then(
              m => m.EmployeesModule
          )
    },
    {
      path: '',
      redirectTo: '/employees',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: '/employees',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

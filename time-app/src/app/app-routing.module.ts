import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: 'employees',
      loadChildren: () =>
          import('./employees/employees.module').then(
              m => m.EmployeesModule
          )
    },
    {
      path: 'settings',
      loadChildren: () =>
          import('./settings/settings.module').then(
              m => m.SettingsModule
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

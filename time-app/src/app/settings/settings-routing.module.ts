import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenSettingsComponent } from './token-settings/token-settings.component';


const routes: Routes = [
    {
      path: '',
      component: TokenSettingsComponent
    },
    {
      path: '**',
      component: TokenSettingsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

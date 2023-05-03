import { NgModule, inject } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionUserService } from 'src/app/core/security/services/session-user.service';
import { AdmViewComponent } from './adm-view/adm-view.component';
import { UserViewComponent } from './user-view/user-view.component';

export const routes: Routes = [
  {
    path: '',
    canMatch: [() => inject(SessionUserService).get().scopes.includes('Adm_Roll')],
    data: { title: 'Home' }, 
    component: AdmViewComponent
  },
  { 
    path: '',
    data: { title: 'Home' },
    component: UserViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

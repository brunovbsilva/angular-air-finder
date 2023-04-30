import { inject, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './core/security/services/authentication.service';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CreateComponent } from './login/create/create.component';
import { EnterComponent } from './login/enter/enter.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', 
    component: MainLayoutComponent,
    canMatch: [() => inject(AuthenticationService).isAuthenticated()],
    children: [
      { 
        path: 'home', 
        children:[
          { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }
        ]
      },
      {
        path: 'test',
        children: [
          { path: '', loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule) },
        ]
      },
      { path: '**', redirectTo: 'home' }
    ]
  },
  { 
    path: '',
    component: LoginComponent,
    children: [
      { path: 'login', component: EnterComponent },
      { path: 'create', component: CreateComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: '**', redirectTo: 'login' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true, anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

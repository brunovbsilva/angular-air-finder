import { inject, NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs';
import { AuthenticationService } from './core/security/services/authentication.service';
import { ScopePermissionsService } from './core/security/services/scope-permissions.service';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CreateComponent } from './login/create/create.component';
import { EnterComponent } from './login/enter/enter.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login',
    component: LoginComponent,
    canActivate: [() => {
      const router = inject(Router);
      return inject(AuthenticationService).isAuthenticated().pipe(
        map(isAuth => !isAuth || router.createUrlTree(['home']))
      );
    }],
    children: [
      { path: '', component: EnterComponent },
      { path: 'create', component: CreateComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent }
    ]
  },
  {
    path: '', 
    component: MainLayoutComponent,
    canMatch: [() => {
      const router = inject(Router);
      return inject(AuthenticationService).isAuthenticated().pipe(
        map(isAuth => isAuth || router.createUrlTree(['login']))
      );
    }],
    children: [
      { path: 'home', children:[
        {
          path: '',
          loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
        }
      ]},
      {
        path: '',
        canActivateChild: [() => inject(ScopePermissionsService).hasPermission$ ],
        children: [
          {
            path: 'test',
            loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule)
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true, anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

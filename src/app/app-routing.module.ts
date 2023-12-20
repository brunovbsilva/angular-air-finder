import { NgModule, inject } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GamesComponent } from './pages/games/games.component';
import { AuthenticationService } from './core/security/services/authentication.service';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    canMatch: [() => inject(AuthenticationService).isAuthenticated()],
    children: [
      { 
        path: 'home', 
        children:[
          { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }
        ]
      },
      {
        path: 'games',
        component: GamesComponent
      },
      {
        path: 'test',
        children: [
          { path: '', loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule) },
        ]
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      { path: '**', redirectTo: 'home' }
    ]
  },
  { 
    path: '',
    component: LoginComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true, anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

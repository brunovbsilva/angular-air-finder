import { inject, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ScopePermissionsService } from './core/security/services/scope-permissions.service';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', 
    component: MainLayoutComponent,
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

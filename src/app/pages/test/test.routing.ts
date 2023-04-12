import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Test'
    },
    children: [
      {
        path: 'test1',
        data: {
          title: 'Test Sub 1',
        },
        component: Test1Component,
      },
      {
        path: 'test2',
        data: {
          title: 'Test Sub 2',
        },
        component: Test2Component,
      },
      {
        path: 'test3',
        data: {
          title: 'Test Sub 3',
        },
        component: Test3Component,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}

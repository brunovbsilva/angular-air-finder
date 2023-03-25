import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestRoutingModule } from './test.routing';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';

@NgModule({
  declarations: [
    Test1Component,
    Test2Component,
    Test3Component
  ],
  imports: [CommonModule, SharedModule, TestRoutingModule]
})
export class TestModule {}

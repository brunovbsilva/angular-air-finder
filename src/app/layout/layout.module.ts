import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbComponent } from '../layout/breadcrumb/breadcrumb.component';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    LayoutComponent,
    BreadcrumbComponent,
    HeaderComponent,
    NavListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    LayoutComponent,
  ],
})
export class LayoutModule {}

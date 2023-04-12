import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MenuSidebarComponent } from './sidebar/menu-sidebar/menu-sidebar.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    MenuSidebarComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    MainLayoutComponent
  ],
})
export class LayoutModule {}

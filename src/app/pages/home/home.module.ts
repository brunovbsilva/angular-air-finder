import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home.routing';
import { AdmViewComponent } from './adm-view/adm-view.component';
import { UserViewComponent } from './user-view/user-view.component';

@NgModule({
  declarations: [
    AdmViewComponent,
    UserViewComponent
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule ]
})
export class HomeModule {}

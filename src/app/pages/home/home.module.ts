import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule ]
})
export class HomeModule {}

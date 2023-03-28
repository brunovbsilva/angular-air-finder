import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material/material.module';
import { EnterComponent } from './enter/enter.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    EnterComponent,
    CreateComponent,
    ForgotPasswordComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    LoginComponent
  ],
})
export class LoginModule {}

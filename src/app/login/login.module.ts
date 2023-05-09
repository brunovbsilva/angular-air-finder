import { TranslateModule } from '@ngx-translate/core';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { EnterComponent } from './enter/enter.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  exports: [
    LoginComponent
  ],
})
export class LoginModule {}

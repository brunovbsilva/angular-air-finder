import { TranslateModule } from '@ngx-translate/core';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { EnterComponent } from './enter/enter.component';
import { CreateComponent } from './create/create.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing';

@NgModule({
  declarations: [
    EnterComponent,
    CreateComponent,
    ForgotPasswordComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  exports: [
    LoginComponent
  ],
})
export class LoginModule {}

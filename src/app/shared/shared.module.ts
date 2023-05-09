import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { KeysPipe } from './pipe/keys.pipe';
import { CredentialsComponent } from './form/components/credentials/credentials.component';
import { PersonalInformationComponent } from './form/components/personal-information/personal-information.component';
import { UpdatePasswordComponent } from './form/components/update-password/update-password.component';
import { ChangePasswordDialogComponent } from './component/change-password-dialog/change-password-dialog.component';
import { InternalUpdatePasswordComponent } from './form/components/internal-update-password/internal-update-password.component';
import { ReadQrcodeDialogComponent } from './component/read-qrcode-dialog/read-qrcode-dialog.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { GameCardComponent } from './component/game-card/game-card.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxScannerQrcodeModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    KeysPipe,
    CredentialsComponent,
    PersonalInformationComponent,
    UpdatePasswordComponent,
    InternalUpdatePasswordComponent,
    GameCardComponent,
  ],
  declarations: [
    KeysPipe,
    CredentialsComponent,
    PersonalInformationComponent,
    UpdatePasswordComponent,
    ChangePasswordDialogComponent,
    InternalUpdatePasswordComponent,
    ReadQrcodeDialogComponent,
    GameCardComponent,
  ],
})
export class SharedModule { }

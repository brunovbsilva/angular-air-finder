import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { KeysPipe } from './pipe/keys.pipe';
import { CredentialsComponent } from './form/components/credentials/credentials.component';
import { PersonalInformationComponent } from './form/components/personal-information/personal-information.component';
import { UpdatePasswordComponent } from './form/components/update-password/update-password.component';
import { InternalUpdatePasswordComponent } from './form/components/internal-update-password/internal-update-password.component';
import { ReadQrcodeDialogComponent } from './component/dialogs/read-qrcode-dialog/read-qrcode-dialog.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { EmptyListComponent } from './component/empty-list/empty-list.component';
import { ChangePasswordDialogComponent } from './component/dialogs/change-password-dialog/change-password-dialog.component';
import { ItemListComponent } from './component/item-list/item-list.component';
import { MiniIconButtonComponent } from './component/mini-icon-button/mini-icon-button.component';
import { ConfirmDialogComponent } from './component/dialogs/confirm-dialog/confirm-dialog.component';

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
    EmptyListComponent,
    ConfirmDialogComponent,
    MiniIconButtonComponent,
    ItemListComponent,
  ],
  declarations: [
    KeysPipe,
    CredentialsComponent,
    PersonalInformationComponent,
    UpdatePasswordComponent,
    ChangePasswordDialogComponent,
    InternalUpdatePasswordComponent,
    ReadQrcodeDialogComponent,
    EmptyListComponent,
    ItemListComponent,
    MiniIconButtonComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }

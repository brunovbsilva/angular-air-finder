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
import { GameCardComponent } from './component/game-card/game-card.component';
import { CreateBattlegroundComponent } from './form/components/create-battleground/create-battleground.component';
import { CreateGameComponent } from './form/components/create-game/create-game.component';
import { CreateGameDialogComponent } from './component/dialogs/create-game-dialog/create-game-dialog.component';
import { SelectBattlegroundComponent } from './component/dialogs/create-game-dialog/select-battleground/select-battleground.component';
import { SelectBattlegroundFieldComponent } from './component/dialogs/create-game-dialog/select-battleground-field/select-battleground-field.component';
import { Address1Pipe } from './component/dialogs/create-game-dialog/select-battleground-field/pipe/address-1.pipe';
import { Address2Pipe } from './component/dialogs/create-game-dialog/select-battleground-field/pipe/address-2.pipe';
import { FilterBattlegroundListPipe } from './component/dialogs/create-game-dialog/select-battleground/pipe/filter-battleground-list.pipe';
import { EmptyListComponent } from './component/empty-list/empty-list.component';
import { ChangePasswordDialogComponent } from './component/dialogs/change-password-dialog/change-password-dialog.component';
import { GameCardDialogComponent } from './component/dialogs/game-card-dialog/game-card-dialog.component';

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
    CreateBattlegroundComponent,
    EmptyListComponent,
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
    GameCardDialogComponent,
    CreateBattlegroundComponent,
    CreateGameComponent,
    CreateGameDialogComponent,
    SelectBattlegroundComponent,
    SelectBattlegroundFieldComponent,
    Address1Pipe,
    Address2Pipe,
    FilterBattlegroundListPipe,
    EmptyListComponent,
  ],
})
export class SharedModule { }

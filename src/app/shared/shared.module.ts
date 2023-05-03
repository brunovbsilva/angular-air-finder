import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SelectComponent } from './component/select/select.component';
import { FilterSearchPipe } from './component/select/pipes/filter-search.pipe';
import { MaterialModule } from './material/material.module';
import { ItemsInViewPipe } from './component/select/pipes/items-in-view.pipe';
import { KeysPipe } from './pipe/keys.pipe';
import { CredentialsComponent } from './form/components/credentials/credentials.component';
import { PersonalInformationComponent } from './form/components/personal-information/personal-information.component';
import { UpdatePasswordComponent } from './form/components/update-password/update-password.component';
import { ChangePasswordDialogComponent } from './component/change-password-dialog/change-password-dialog.component';
import { InternalUpdatePasswordComponent } from './form/components/internal-update-password/internal-update-password.component';
import { MultiSelectComponent } from './component/multi-select/multi-select.component';
import { SelectDialogComponent } from './component/multi-select/select-dialog/select-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SelectComponent,
    FilterSearchPipe,
    ItemsInViewPipe,
    KeysPipe,
    CredentialsComponent,
    PersonalInformationComponent,
    UpdatePasswordComponent,
    InternalUpdatePasswordComponent,
    MultiSelectComponent,
  ],
  declarations: [
    SelectComponent,
    FilterSearchPipe,
    ItemsInViewPipe,
    KeysPipe,
    CredentialsComponent,
    PersonalInformationComponent,
    UpdatePasswordComponent,
    ChangePasswordDialogComponent,
    InternalUpdatePasswordComponent,
    MultiSelectComponent,
    SelectDialogComponent,
  ],
})
export class SharedModule { }

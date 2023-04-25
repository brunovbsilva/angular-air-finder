import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SelectComponent } from './component/select/select.component';
import { FilterSearchPipe } from './component/select/pipes/filter-search.pipe';
import { MaterialModule } from './material/material.module';
import { ItemsInViewPipe } from './component/select/pipes/items-in-view.pipe';
import { PasswordValidatorsComponent } from './component/password-validators/password-validators.component';
import { KeysPipe } from './pipe/keys.pipe';

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
    PasswordValidatorsComponent,
    KeysPipe
  ],
  declarations: [
    SelectComponent,
    FilterSearchPipe,
    ItemsInViewPipe,
    PasswordValidatorsComponent,
    KeysPipe
  ],
})
export class SharedModule { }

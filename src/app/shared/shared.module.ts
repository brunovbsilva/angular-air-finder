import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SelectComponent } from './component/select/select.component';
import { FilterSearchPipe } from './component/select/pipes/filter-search.pipe';
import { MaterialModule } from './material/material.module';

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
    FilterSearchPipe
  ],
  declarations: [
    SelectComponent,
    FilterSearchPipe
  ],
})
export class SharedModule { }

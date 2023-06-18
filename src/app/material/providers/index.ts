import { MAT_CHECKBOX_DEFAULT_OPTIONS } from "@angular/material/checkbox";
import { ErrorStateMatcher } from "@angular/material/core";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MAT_PAGINATOR_DEFAULT_OPTIONS } from "@angular/material/paginator";
import { MAT_RADIO_DEFAULT_OPTIONS } from "@angular/material/radio";
import { MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS } from "@angular/material/slide-toggle";
import { CustomErrorStateMatcher } from "src/app/shared/form/form-helpers/custom-state-matcher";

export const MaterialProviders = [
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' }},
    { provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { color: 'primary' }},
    { provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, useValue: { color: 'primary' }},
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', color: 'accent' }},
    { provide: MAT_PAGINATOR_DEFAULT_OPTIONS, useValue: { showFirstLastButtons: true, hidePageSize: true }},
    { provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher },
]
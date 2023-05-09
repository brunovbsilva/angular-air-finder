import { MAT_CHECKBOX_DEFAULT_OPTIONS } from "@angular/material/checkbox";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MAT_RADIO_DEFAULT_OPTIONS } from "@angular/material/radio";
import { MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS } from "@angular/material/slide-toggle";

export const MaterialProviders = [
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' }},
    { provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { color: 'primary' }},
    { provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, useValue: { color: 'primary' }},
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', color: 'accent' }}
]
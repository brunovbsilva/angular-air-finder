import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class CustomErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(
        control: FormControl | null, 
        form: FormGroupDirective | NgForm | null
    ): boolean {
        if(control?.dirty) {
            return (control.errors?.['required'] ?? false) || 
                (control.errors?.['invalidEmail'] ?? false)
        }
        return false;
    }
}
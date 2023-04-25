import { Injectable } from "@angular/core";
import { FormControl, ValidationErrors, Validators } from "@angular/forms";

@Injectable()
export class CustomFormValidations extends Validators {

    static emailValidator(control: FormControl): ValidationErrors | null {
        const email = control.value;
        if(email && email != '') {
            const validEmailRagex = /^[\w-\.]+@([A-Za-z]+\.)+[A-Za-z]{2,4}$/;
            return validEmailRagex.test(email) ? null : { invalidEmail: true };
        }
        return null;
    }

    //#region password
    static uppercaseValidator(control: FormControl): ValidationErrors | null {
        const value = control.value;
        if(value && value != '') {
            const ragex = /[A-Z]/;
            return ragex.test(value) ? null : { invalidPasswordUppercase: true };
        }
        return null;
    }

    static lowercaseValidator(control: FormControl): ValidationErrors | null {
        const value = control.value;
        if(value && value != '') {
            const ragex = /[a-z]/;
            return ragex.test(value) ? null : { invalidPasswordLowercase: true };
        }
        return null;
    }
    
    static numberValidator(control: FormControl): ValidationErrors | null {
        const value = control.value;
        if(value && value != '') {
            const ragex = /\d/;
            return ragex.test(value) ? null : { invalidPasswordNumber: true };
        }
        return null
    }

    static specialValidator(control: FormControl): ValidationErrors | null {
        const value = control.value;
        if(value && value != '') {
            const ragex = /\.*[@#$%^&;*\-_+=[\]{}|\:',?/`~;();!\\]/;
            return ragex.test(value) ? null : { invalidPasswordSpecial: true };
        }
        return null
    }
    //#endregion
}
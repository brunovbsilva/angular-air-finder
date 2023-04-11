import { AbstractControl, FormControl } from "@angular/forms";

export class CustomFormValidations {

    static emailValidator(control: FormControl) {
        const email = control.value;
        if(email && email != '') {
            const validEmailRagex = /^[\w-\.]+@([A-Za-z]+\.)+[A-Za-z]{2,4}$/;
            return validEmailRagex.test(email) ? null : { invalidEmail: true };
        }
        return null;
    }

    static passwordValidator(control: FormControl) {
        const password = control.value; 
        if(password && password != '') {
            const result = { 
                invalidCharactersNumber: !(password.length >= 8),
                invalidPasswordUppercase: !/[A-Z]/.test(password),
                invalidPasswordLowercase: !/[a-z]/.test(password),
                invalidPasswordNumber: !/\d/.test(password),
                invalidPasswordSpecial: !/\.*[@#$%^&;*\-_+=[\]{}|\:',?/`~;();!\\]/.test(password),
            }
            return (result.invalidCharactersNumber || result.invalidPasswordLowercase || result.invalidPasswordNumber || 
                result.invalidPasswordSpecial || result.invalidPasswordUppercase) ? result : null;
        }
        return null
    }
}
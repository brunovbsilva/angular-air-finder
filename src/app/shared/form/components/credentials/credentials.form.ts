import { Injectable } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomFormValidations } from "../../form-helpers/custom-form-validations";

@Injectable()
export class CredentialsForm extends FormGroup {

    public get login() {
        return this.get('login')!;
    }
    public get password() {
        return this.get('password')!;
    }
    public get confirmPassword() {
        return this.get('confirm-password')!;
    }

    constructor() {
        super({});
        this.buildForm();
    }

    private buildForm() {
        this.addControl('login', new FormControl('', [Validators.required]));
        this.addControl('password', new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            CustomFormValidations.uppercaseValidator,
            CustomFormValidations.lowercaseValidator,
            CustomFormValidations.numberValidator,
            CustomFormValidations.specialValidator,
            CustomFormValidations.spaceValidator
        ]));
        this.addControl('confirm-password', new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            CustomFormValidations.uppercaseValidator,
            CustomFormValidations.lowercaseValidator,
            CustomFormValidations.numberValidator,
            CustomFormValidations.specialValidator,
            CustomFormValidations.spaceValidator
        ]));
        this.addValidators(
            this.compareValidator(
                this.get('password')!,
                this.get('confirm-password')!
            )
        );
    }

    public getValues() {
        return {
            login: this.login.value,
            password: this.password.value,
            confirmPassword: this.confirmPassword.value
        }
    }

    // #region formGroup validators
    private compareValidator(controlOne: AbstractControl, controlTwo: AbstractControl) {
        return () => {
            if (controlOne.value !== controlTwo.value && controlOne.value != '' && controlTwo.value != '')
                return { passwordMatch: true };
            return null;
        };
    }
    // #endregion
}
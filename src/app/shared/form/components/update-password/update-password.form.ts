import { Injectable } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomFormValidations } from "../../form-helpers/custom-form-validations";

@Injectable()
export class UpdatePasswordForm extends FormGroup {

    public get password() {
        return this.get('new-password')!;
    }
    public get confirmPassword() {
        return this.get('confirm-new-password')!;
    }

    constructor() {
        super({});
        this.buildForm();
    }

    private buildForm() {
        this.addControl('new-password', new FormControl('', [ 
            Validators.required,
            Validators.minLength(8),
            CustomFormValidations.uppercaseValidator,
            CustomFormValidations.lowercaseValidator,
            CustomFormValidations.numberValidator,
            CustomFormValidations.specialValidator,
            CustomFormValidations.spaceValidator
        ]));
        this.addControl('confirm-new-password', new FormControl('', [ 
            Validators.required,
            Validators.minLength(8),
            CustomFormValidations.uppercaseValidator,
            CustomFormValidations.lowercaseValidator,
            CustomFormValidations.numberValidator,
            CustomFormValidations.specialValidator,
            CustomFormValidations.spaceValidator
        ]));
        this.addValidators(
            this.mustMatchValidator(
                this.get('new-password')!,
                this.get('confirm-new-password')!
            )
        )
    }

    private mustMatchValidator(control1: AbstractControl, control2: AbstractControl){
        return () => {
            const value1 = control1.value;
            const value2 = control2.value;

            if(value1 && value2 && value1 != '' && value2 != ''){
                return value1 != value2 ? { valuesMustMatch: true } : null
            }
            return null;
        }
    }

    public getValues() {
        return {
            newPassword: this.password.value,
            confirmPassword: this.confirmPassword.value,
        }
    }
}
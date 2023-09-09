import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomFormValidations } from "../../form-helpers/custom-form-validations";

@Injectable()
export class PersonalForm extends FormGroup {

    public get name() {
        return this.get('name')!;
    }
    public get email() {
        return this.get('email')!;
    }
    public get phone() {
        return this.get('phone')!;
    }
    public get CPF() {
        return this.get('CPF')!;
    }
    public get birthday() {
        return this.get('birthday')!;
    }
    public get gender() {
        return this.get('gender')!;
    }

    constructor() {
        super({});
        this.buildForm();
    }

    private buildForm() {
        this.addControl('name', new FormControl('', [Validators.required]));
        this.addControl('email', new FormControl('', [Validators.required, CustomFormValidations.emailValidator]));
        this.addControl('CPF', new FormControl('', [Validators.required, Validators.pattern(/^\d{11}$/)]));
        this.addControl('phone', new FormControl('', [Validators.required, Validators.pattern(/^\d{10,11}$/)]));
        this.addControl('birthday', new FormControl(new Date(), [Validators.required]));
        this.addControl('gender', new FormControl(-1, Validators.required));
    }

    public getValues() {
        return {
            name: this.name.value,
            email: this.email.value,
            cpf: this.CPF.value,
            phone: this.phone.value,
            birthday: this.birthday.value,
            gender: this.gender.value
        }
    }
}
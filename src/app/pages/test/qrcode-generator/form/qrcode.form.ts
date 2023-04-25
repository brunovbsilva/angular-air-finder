import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class QRCodeForm extends FormGroup {

    public get name() {
        return this.get('name')!;
    }
    public get message() {
        return this.get('message')!;
    }

    constructor() {
        super({});
        this.buildForm();
    }

    private buildForm() {
        this.addControl('name', new FormControl('', [ Validators.required ]));
        this.addControl('message', new FormControl('', [ Validators.required ]));
    }

    public getValues() {
        return {
            name: this.name.value,
            message: this.message.value
        }
    }
}
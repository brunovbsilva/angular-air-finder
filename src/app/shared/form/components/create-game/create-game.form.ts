import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomDateExtention } from "src/app/shared/utils/get-date-time.extention";

@Injectable()
export class CreateGameForm extends FormGroup {

    public get name() { return this.get('name')!; }
    public get description() { return this.get('description')!; }
    public get date() { return this.get('date')!; }
    public get time() { return this.get('time')!; }

    constructor() {
        super({});
        this.buildForm();
    }

    private buildForm() {
        this.addControl('name', new FormControl('', [Validators.required, Validators.maxLength(50)]));
        this.addControl('description', new FormControl('', [Validators.required]));
        this.addControl('date', new FormControl('', [Validators.required]));
        this.addControl('time', new FormControl('', [Validators.required]))
    }

    public getValues() {
        return {
            name: this.name.value,
            description: this.description.value,
            date: CustomDateExtention.getDateTime(this.date.value, this.time.value)
        }
    }

    public markAllAsDirty() {
        this.name.markAsDirty();
        this.description.markAsDirty();
        this.date.markAsDirty();
        this.time.markAsDirty();
    }
}
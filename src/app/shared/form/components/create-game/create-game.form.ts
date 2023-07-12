import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomDateExtention } from "src/app/shared/utils/get-date-time.extention";

@Injectable()
export class CreateGameForm extends FormGroup {

    public get name() { return this.get('name')!; }
    public get description() { return this.get('description')!; }
    public get maxPlayers() { return this.get('maxPlayers')!; }
    public get date() { return this.get('date')!; }
    public get timeFrom() { return this.get('timeFrom')!; }
    public get timeUpTo() { return this.get('timeUpTo')!; }

    constructor() {
        super({});
        this.buildForm();
    }

    private buildForm() {
        this.addControl('name', new FormControl('', [Validators.required, Validators.maxLength(50)]));
        this.addControl('description', new FormControl('', [Validators.required]));
        this.addControl('maxPlayers', new FormControl('', [Validators.required]));
        this.addControl('date', new FormControl('', [Validators.required]));
        this.addControl('timeFrom', new FormControl('', [Validators.required]));
        this.addControl('timeUpTo', new FormControl('', [Validators.required]));
    }

    public getValues() {
        return {
            name: this.name.value,
            description: this.description.value,
            dateFrom: CustomDateExtention.getDateTime(this.date.value, this.timeFrom.value),
            dateUpTo: CustomDateExtention.getDateTime(this.date.value, this.timeUpTo.value),
            maxPlayers: this.maxPlayers.value
        }
    }

    public markAllAsDirty() {
        this.name.markAsDirty();
        this.description.markAsDirty();
        this.maxPlayers.markAsDirty();
        this.date.markAsDirty();
        this.timeFrom.markAsDirty();
        this.timeUpTo.markAsDirty();
    }
}
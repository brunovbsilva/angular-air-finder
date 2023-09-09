import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class CreateBattlegroundForm extends FormGroup {

    public get name() { return this.get('name')!; }
    public get base64() { return this.get('base64')!; }
    public get cep() { return this.get('cep')!; }
    public get address() { return this.get('address')!; }
    public get neighborhood() { return this.get('neighborhood')! }
    public get number() { return this.get('number')!; }
    public get city() { return this.get('city')!; }
    public get state() { return this.get('state')!; }
    public get country() { return this.get('country')!; }

    constructor() {
        super({});
        this.buildForm();
        this.address.disable();
        this.neighborhood.disable();
        this.number.disable();
        this.city.disable();
        this.state.disable();
        this.country.disable();
    }

    private buildForm() {
        this.addControl('name', new FormControl('', [Validators.required, Validators.maxLength(50)]));
        this.addControl('base64', new FormControl(''));
        this.addControl('cep', new FormControl('', [Validators.required, Validators.maxLength(8)]));
        this.addControl('address', new FormControl('', [Validators.required]));
        this.addControl('neighborhood', new FormControl('', [Validators.required]));
        this.addControl('number', new FormControl('', [Validators.required]));
        this.addControl('city', new FormControl('', [Validators.required]));
        this.addControl('state', new FormControl('', [Validators.required]));
        this.addControl('country', new FormControl('Brasil', [Validators.required]));
    }

    public getValues() {
        return {
            name: this.name.value,
            imageBase64: this.base64.value,
            cep: this.cep.value,
            address: this.address.value,
            neighborhood: this.neighborhood.value,
            number: this.number.value,
            city: this.city.value,
            state: this.state.value,
            country: this.country.value,
        }
    }

    public markAllAsDirty() {
        this.name.markAsDirty();
        this.base64.markAsDirty();
        this.cep.markAsDirty();
        this.address.markAsDirty();
        this.neighborhood.markAsDirty();
        this.number.markAsDirty();
        this.city.markAsDirty();
        this.state.markAsDirty();
        this.country.markAsDirty();
    }
}
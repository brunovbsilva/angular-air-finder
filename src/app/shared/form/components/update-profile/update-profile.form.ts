import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UpdateProfileRequest } from "src/app/shared/services/models/person/requests/update-profile.request";

@Injectable()
export class UpdateProfileForm extends FormGroup {

  public get name() {
    return this.get('name')!;
  }
  public get email() {
    return this.get('email')!;
  }
  public get phone() {
    return this.get('phone')!;
  }
  public get image() {
    return this.get('image')!;
  }

  constructor() {
    super({});
    this.buildForm();
  }

  private buildForm() {
    this.addControl('name', new FormControl(''));
    this.addControl('email', new FormControl('', [Validators.pattern(/^[\w-\.]+@([A-Za-z]+\.)+[A-Za-z]{2,4}$/)]));
    this.addControl('phone', new FormControl('', [Validators.pattern(/^\d{10,11}$/)]));
    this.addControl('image', new FormControl(''));
  }

  public getValues(): UpdateProfileRequest {
    return {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      image: this.image.value[0] ?? undefined
    }
  }
}
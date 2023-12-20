import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomFormValidations } from "../../form-helpers/custom-form-validations";
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
    this.addControl('name', new FormControl(null, [Validators.required]));
    this.addControl('email', new FormControl(null, [Validators.required, CustomFormValidations.emailValidator]));
    this.addControl('phone', new FormControl(null, [Validators.required, Validators.pattern(/^\d{10,11}$/)]));
    this.addControl('image', new FormControl(null, [Validators.required]));
  }

  public getValues(): UpdateProfileRequest {
    return {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      image: this.image.value[0]
    }
  }
}
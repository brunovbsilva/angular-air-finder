import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/security/services/authentication.service';
import { CustomFormValidations } from '../form-helpers/custom-form-validations';
import { PasswordValidatorsComponent } from 'src/app/shared/component/password-validators/password-validators.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  public hideP = true;
  @ViewChild('validatorsPassword') passwordInput!: PasswordValidatorsComponent; 
  public hideCP = true;
  @ViewChild('validatorsConfirmPassword') confirmInput!: PasswordValidatorsComponent; 
  public formCredentialsStep: FormGroup;
  public formPersonalStep: FormGroup;

  constructor(
    private authenticationService: AuthenticationService, 
    private router: Router,
    private fb: FormBuilder) {
      this.formCredentialsStep = this.fb.group({
        login: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, CustomFormValidations.passwordValidator]),
        confirmPassword: new FormControl('', [Validators.required, CustomFormValidations.passwordValidator]),
      });
      this.formCredentialsStep.get('confirmPassword')?.addValidators(
        this.compareValidator(
          this.formCredentialsStep.get('password')!,
          this.formCredentialsStep.get('confirmPassword')!
        )
      )
      this.formPersonalStep = this.fb.group({
        name: new FormControl('', [Validators.required]),
        birthday: new FormControl(new Date, [Validators.required]),
        email: new FormControl('', [Validators.required, CustomFormValidations.emailValidator]),
      });
  }

  compareValidator(controlOne: AbstractControl, controlTwo: AbstractControl) {
    return () => {
      if (controlOne.value !== controlTwo.value && controlOne.value != '' && controlTwo.value != '')
        return { passwordMatch: true };
      return null;
    };
  }

  onFocus(number: number = -1) {
    number == 0 ? this.passwordInput.show() : this.passwordInput.hide();
    number == 1 ? this.confirmInput.show() : this.confirmInput.hide();
  }

  submit() {

  }
}

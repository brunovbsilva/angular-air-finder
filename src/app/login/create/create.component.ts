import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/security/services/authentication.service';
import { CustomFormValidations } from '../form-helpers/custom-form-validations';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  hideP = true;
  validationsP = false;
  hideCP = true;
  validationsCP = false;
  formFirstStep: FormGroup;
  formSecondStep: FormGroup;

  constructor(
    private authenticationService: AuthenticationService, 
    private router: Router,
    private fb: FormBuilder) {
      this.formFirstStep = this.fb.group({
        login: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, CustomFormValidations.passwordValidator]),
        confirmPassword: new FormControl('', [Validators.required, CustomFormValidations.passwordValidator]),
      });
      this.formFirstStep.get('confirmPassword')?.addValidators(
        this.compareValidator(
          this.formFirstStep.get('password')!,
          this.formFirstStep.get('confirmPassword')!
        )
      )
      this.formSecondStep = this.fb.group({
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

  focusPassword(number: number, set: boolean) {
    switch(number){
      case 0:
        this.validationsP = set;
        break;
      case 1:
        this.validationsCP = set;
        break;
    }
  }

  submit() {

  }
}

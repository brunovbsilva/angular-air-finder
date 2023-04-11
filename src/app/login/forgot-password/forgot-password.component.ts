import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomFormValidations } from '../form-helpers/custom-form-validations';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  hideP: boolean = true;
  hideCP: boolean = true;
  formEmailStep: FormGroup;
  formCodeStep: FormGroup;
  formPasswordStep: FormGroup;
  private code: string = '1234';

  constructor(
    private router: Router,
    private fb: FormBuilder) {
      this.formEmailStep = this.fb.group({
        email: new FormControl('', [Validators.required, CustomFormValidations.emailValidator])
      })
      this.formCodeStep = this.fb.group({
        code: new FormControl('', [Validators.required])
      })
      this.formCodeStep.get('code')?.addValidators(
        this.codeValidator(this.formCodeStep.get('code')!)
      );
      this.formPasswordStep = this.fb.group({
        newPassword: new FormControl('', [Validators.required, CustomFormValidations.passwordValidator]),
        confirmPassword: new FormControl('', [Validators.required, CustomFormValidations.passwordValidator])
      })
      this.formPasswordStep.get('confirmPassword')?.addValidators(
        this.compareValidator(
          this.formPasswordStep.get('newPassword')!,
          this.formPasswordStep.get('confirmPassword')!
        )
      )
  }

  codeValidator(control: AbstractControl) {
    return () => {
      const value = control.value;
      if (control.value && control.value != '')
        return (value != this.code) ? { invalidCode: 'Value does not match' } : null;
      return null;
    }
  }

  compareValidator(controlOne: AbstractControl, controlTwo: AbstractControl) {
      return () => {
      if (controlOne.value !== controlTwo.value && controlOne.value != '' && controlTwo.value != '')
        return { match_error: 'Value does not match' };
      return null;
    };
  }

  submit() {
    
  }

  private sendCode() {

  }

}

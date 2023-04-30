import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomFormValidations } from '../../shared/form/form-helpers/custom-form-validations';
import { UpdatePasswordForm } from '../../shared/form/components/update-password/update-password.form';
import { MatStepper } from '@angular/material/stepper';
import { finalize } from 'rxjs';
import { VerifyTokenRequest } from './model/verify-token-request';
import { ChangePasswordRequest } from './model/change-password-request';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public hideP = true;
  public hideCP = true;
  public form: FormGroup;
  @ViewChild('stepper') stepper!: MatStepper;
  public emailLoading = false;
  public codeLoading = false;
  public passwordLoading = false;

  get emailControl() {
    return this.form.get('email')!;
  }

  get codeControl() {
    return this.form.get('code')!;
  }

  get passwordGroup(): UpdatePasswordForm {
    return this.form.get('update-password')! as UpdatePasswordForm;
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService) {
      this.form = this.fb.group({
        'email': new FormControl('', [ Validators.required, CustomFormValidations.emailValidator ]),
        'code': new FormControl('', [ Validators.required ]),
        'update-password': new UpdatePasswordForm()
      })
  }

  ngOnInit():void { }

  emailStepCheck() {
    if(!this.emailControl.valid) {
      this.stepper.next();
      return;
    }

    this.emailLoading = true;
    this.loginService.sendToken(this.emailControl.value)
      .pipe(finalize(() => this.emailLoading = false))
      .subscribe({
        next: () => this.stepper.next(),
        error: () => this.emailControl.setErrors({'emailNotExist': true})
    });
  }

  codeStepCheck() {
    if(!this.codeControl.valid) {
      this.stepper.next();
      return;
    }

    var request = new VerifyTokenRequest();
    request.email = this.emailControl.value;
    request.token = this.codeControl.value;

    this.codeLoading = true;

    this.loginService.verifyToken(request)
      .pipe(finalize(() => this.codeLoading = false))
      .subscribe({
        next: () => this.stepper.next(),
        error: () => this.codeControl.setErrors({'invalidCode': true})
    });
  }

  submit() {
    if(!this.passwordGroup.valid)
      return;

    var request = new ChangePasswordRequest();
    request.email = this.emailControl.value;
    request.newPassword = this.passwordGroup.password.value;

    this.passwordLoading = true;

    this.loginService.changePasswordToken(request)
      .pipe(finalize(() => this.passwordLoading = false))
      .subscribe({
        next: () => this.router.navigate(['/home']),
        error: () => {}
    });
  }

}

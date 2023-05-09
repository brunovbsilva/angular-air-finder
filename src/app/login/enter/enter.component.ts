import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/security/services/authentication.service';
import { LoginRequest } from './model/login-request';
import { LoginService } from 'src/app/login/services/login.service';
import { finalize, tap } from 'rxjs';
import { SessionUserService } from 'src/app/core/security/services/session-user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent {
  hide = true;
  loadingLogin = false;
  form: FormGroup;

  constructor (
    private authenticationService: AuthenticationService,
    private loginService: LoginService, 
    private router: Router,
    private fb: FormBuilder,
    private sessionUser: SessionUserService
  ) 
  {
    this.form = this.fb.group({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit() {
    if(!this.form.valid) return;

    this.loadingLogin = true;
    var request = new LoginRequest()
    request.login = this.form.get('login')?.value,
    request.password = this.form.get('password')?.value

    this.loginService.login(request)
      .pipe(
        finalize(() => this.loadingLogin = false)
      )
      .subscribe({
        next: (response) => {
          this.authenticationService
            .login(response.token)
            .pipe(finalize(() => this.router.navigate([''])))
            .subscribe(() => console.log(this.sessionUser.get()));
        }
      });
  }
}

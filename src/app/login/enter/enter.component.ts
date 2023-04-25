import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/security/services/authentication.service';
import { LoginRequest } from './model/login-request';
import { UserService } from 'src/app/core/security/services/user.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent {
  hide = true;
  form: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService, 
    private router: Router,
    private fb: FormBuilder) {
      this.form = this.fb.group({
        login: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      })
  }

  submit() {
    if(!this.form.valid) return;

    var request = new LoginRequest()
    request.login = this.form.get('login')?.value,
    request.password = this.form.get('password')?.value

    this.userService.login(request)
      .subscribe({
        next: (response) => {
          this.authenticationService
            .login(response.user)
            .pipe(finalize(() => this.router.navigate(['/home'])))
            .subscribe(() => console.log('login!'));
        }
      });
  }
}

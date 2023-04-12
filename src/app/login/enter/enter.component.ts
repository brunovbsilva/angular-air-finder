import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthenticationService } from 'src/app/core/security/services/authentication.service';

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
    private router: Router,
    private fb: FormBuilder) {
      this.form = this.fb.group({
        login: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      })
  }

  submit() {
    console.log('try');
    if(this.form.status != 'VALID')
      return;

    this.authenticationService.login(
      this.form.get('login')?.value, 
      this.form.get('password')?.value)
    .pipe(finalize(() => this.router.navigate(['/home'])))
    .subscribe(() => console.log('login!'));
  }
}

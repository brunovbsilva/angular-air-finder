import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/security/services/authentication.service';
import { CredentialsForm } from '../../shared/form/components/create-credentials/credentials.form';
import { PersonalForm } from '../../shared/form/components/personal-information/personal.form';
import { UserService } from 'src/app/core/security/services/user.service';
import { UserRequest } from './model/user-request';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    credentials: new CredentialsForm(),
    personal: new PersonalForm()
  });
  public hideP = true;
  public hideCP = true;
  public loading = false;

  get personal(): PersonalForm {
    return this.form.get('personal')! as PersonalForm;
  }
  get credentials(): CredentialsForm {
    return this.form.get('credentials')! as CredentialsForm;
  }

  constructor(
    private authenticationService: AuthenticationService, 
    private router: Router,
    private userService: UserService) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe(v => {
      console.log(v);
    });
  }

  submit() {
    var request = new UserRequest();

    request.name = this.personal.name.value;
    request.birthday = this.personal.birthday.value;
    request.cpf = this.personal.CPF.value;
    request.phone = this.personal.phone.value;
    //request.gender = this.personal.gender.value;
    request.email = this.personal.email.value;
    request.login = this.credentials.login.value;
    request.password = this.credentials.password.value;

    this.loading = true;
    this.userService
      .createUser(request)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: () => this.router.navigate(['/home']),
        error: () => {}
      });
  }

  getKeys(obj: any) {
    return obj ? Object.keys(obj) : [];
  }
}

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsForm } from '../../shared/form/components/credentials/credentials.form';
import { PersonalForm } from '../../shared/form/components/personal-information/personal.form';
import { LoginService } from 'src/app/login/services/login.service';
import { finalize } from 'rxjs';
import { CreateMapper } from './mapper/create.mapper';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  public form: FormGroup = new FormGroup({
    credentials: new CredentialsForm(),
    personal: new PersonalForm()
  });
  public loading = false;

  get personal(): PersonalForm {
    return this.form.get('personal')! as PersonalForm;
  }
  get credentials(): CredentialsForm {
    return this.form.get('credentials')! as CredentialsForm;
  }

  constructor (
    private router: Router,
    private loginService: LoginService,
    private createMapper: CreateMapper
  ) {}

  submit() {
    var request = this.createMapper.mapCreateForm(this.personal, this.credentials);
    this.loading = true;
    this.loginService
      .createUser(request)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: () => this.router.navigate(['']),
        error: () => {}
      });
  }
}

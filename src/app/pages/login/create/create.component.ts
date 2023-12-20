import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { finalize } from 'rxjs';
import { CreateMapper } from './mapper/create.mapper';
import { CredentialsForm } from 'src/app/shared/form/components/credentials/credentials.form';
import { PersonalForm } from 'src/app/shared/form/components/personal-information/personal.form';

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
    private loginService: UserService,
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

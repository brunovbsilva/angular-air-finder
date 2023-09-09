import { Component, Input } from '@angular/core';
import { CredentialsForm } from 'src/app/shared/form/components/credentials/credentials.form';

@Component({
  selector: 'credentials-form',
  template: '',
})
export class CredentialsComponentSpec {
  @Input() credentials!: CredentialsForm;
}

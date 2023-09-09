import { Component, Input } from '@angular/core';
import { CredentialsForm } from './credentials.form';

@Component({
  selector: 'credentials-form',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent {
  @Input() credentials!: CredentialsForm;
  public hidePassword: boolean = true;
  public hideConfirmPassword: boolean = true;
}

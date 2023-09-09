import { Component, Input } from '@angular/core';
import { UpdatePasswordForm } from './update-password.form';

@Component({
  selector: 'update-password-form',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent {
  @Input() updatePassword!: UpdatePasswordForm;
  public hidePassword: boolean = true;
  public hideConfirmPassword: boolean = true;
}

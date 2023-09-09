import { Component, Input } from '@angular/core';
import { InternalUpdatePasswordForm } from './internal-update-password.form';

@Component({
  selector: 'internal-update-password-form',
  templateUrl: './internal-update-password.component.html',
  styleUrls: ['./internal-update-password.component.scss']
})
export class InternalUpdatePasswordComponent {
  @Input() updatePassword!: InternalUpdatePasswordForm;
  public hideCurrentPassword: boolean = true;
  public hideNewPassword: boolean = true;
  public hideConfirmPassword: boolean = true;
}

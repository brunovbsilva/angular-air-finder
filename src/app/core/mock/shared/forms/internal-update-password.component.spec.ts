import { Component, Input } from '@angular/core';
import { InternalUpdatePasswordForm } from 'src/app/shared/form/components/internal-update-password/internal-update-password.form';

@Component({
  selector: 'internal-update-password-form',
  template: '',
})
export class InternalUpdatePasswordComponentSpec {
  @Input() updatePassword!: InternalUpdatePasswordForm;
}

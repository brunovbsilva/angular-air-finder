import { Component, Input } from "@angular/core";
import { UpdatePasswordForm } from "src/app/shared/form/components/update-password/update-password.form";

@Component({
  selector: 'update-password-form',
  template: '',
})
export class UpdatePasswordComponentSpec {
  @Input() updatePassword!: UpdatePasswordForm;
}

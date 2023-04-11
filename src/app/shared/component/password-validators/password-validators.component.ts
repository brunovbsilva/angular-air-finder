import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-validators',
  templateUrl: './password-validators.component.html',
  styleUrls: ['./password-validators.component.scss']
})
export class PasswordValidatorsComponent {
  @Input() public form!: FormGroup;
  @Input() public name!: string;
  public validators: string[] = ['invalidCharactersNumber', 'invalidPasswordUppercase', 'invalidPasswordLowercase', 'invalidPasswordNumber', 'invalidPasswordSpecial'];
}

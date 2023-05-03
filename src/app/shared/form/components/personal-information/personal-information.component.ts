import { Component, Input } from '@angular/core';
import { PersonalForm } from './personal.form';

@Component({
  selector: 'personal-information-form',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {
  @Input() personal!: PersonalForm;
}

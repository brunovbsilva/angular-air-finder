import { Component, Input } from '@angular/core';
import { PersonalForm } from 'src/app/shared/form/components/personal-information/personal.form';

@Component({
  selector: 'personal-information-form',
  template: '',
})
export class PersonalInformationComponentSpec {
  @Input() personal!: PersonalForm;
}

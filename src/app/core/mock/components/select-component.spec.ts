import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectModel } from 'src/app/shared/component/select/models/select.model';

@Component({
  selector: 'app-select',
  template: '',
})
export class SelectComponentSpec {
  @Input() form: FormGroup = new FormGroup({});
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() items: SelectModel[] = []
  @Input() name: string = ''
  public valuesSelected: SelectModel[] = [];
  public open: boolean = false;
  public selectAll: boolean = false;
}

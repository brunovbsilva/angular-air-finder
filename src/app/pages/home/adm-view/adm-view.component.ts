import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/shared/component/select/models/select.model';

@Component({
  selector: 'app-adm-view',
  templateUrl: './adm-view.component.html',
  styleUrls: ['./adm-view.component.scss']
})
export class AdmViewComponent {
  items: SelectModel[] = [
    { name: 'Pessoa 1', value: 1, selected: true },
    { name: 'Pessoa 2', value: 2, selected: true },
    { name: 'Pessoa 3', value: 3, selected: true },
    { name: 'Pessoa 4', value: 4, selected: true },
    { name: 'Pessoa 5', value: 5, selected: true },
    { name: 'Pessoa 6', value: 6, selected: true },
    { name: 'Pessoa 7', value: 7, selected: false },
    { name: 'Pessoa 8', value: 8, selected: false },
    { name: 'Pessoa 9', value: 9, selected: false },
    { name: 'Pessoa 10', value: 10, selected: false },
  ]
  items2: SelectModel[] = [
    { name: 'Pessoa 1', value: 1, selected: true },
    { name: 'Pessoa 2', value: 2, selected: true },
    { name: 'Pessoa 3', value: 3, selected: true },
    { name: 'Pessoa 4', value: 4, selected: true },
    { name: 'Pessoa 5', value: 5, selected: true },
    { name: 'Pessoa 6', value: 6, selected: true },
    { name: 'Pessoa 7', value: 7, selected: false },
    { name: 'Pessoa 8', value: 8, selected: false },
    { name: 'Pessoa 9', value: 9, selected: false },
    { name: 'Pessoa 10', value: 10, selected: false },
  ]
  items3: SelectModel[] = [
    { name: 'Pessoa 1', value: 1, selected: true },
    { name: 'Pessoa 2', value: 2, selected: true },
    { name: 'Pessoa 3', value: 3, selected: true },
    { name: 'Pessoa 4', value: 4, selected: true },
    { name: 'Pessoa 5', value: 5, selected: true },
    { name: 'Pessoa 6', value: 6, selected: true },
    { name: 'Pessoa 7', value: 7, selected: false },
    { name: 'Pessoa 8', value: 8, selected: false },
    { name: 'Pessoa 9', value: 9, selected: false },
    { name: 'Pessoa 10', value: 10, selected: false },
  ]
  form: FormGroup = new FormGroup({})

  formControl = new FormControl('123');

  ngOnInit(): void {
    this.form.addControl('teste', new FormControl([]));
    this.form.addControl('teste2', new FormControl([]));
    this.form.addControl('teste3', new FormControl([]));
    this.form.addControl('teste4', new FormControl('', [Validators.required]));

    this.form.get('teste4')?.valueChanges.subscribe(v => console.log(this.form.get('teste4')))
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.form.get('teste')?.patchValue([1,2,3])
    }, 1000);
  }

  onClick() {
    this.form.get('teste')?.patchValue([1,4,7]);
    this.form.get('teste2')?.patchValue([2,5,8]);
    this.form.get('teste3')?.patchValue([3,6,9]);
  }

  onReset() {
    this.form.reset();
  }
}

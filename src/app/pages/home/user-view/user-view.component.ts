import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { SelectModel } from 'src/app/shared/component/select/models/select.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  get open() {
    return this.items.length > 0
  }

  ngOnInit(): void {
    this.form.addControl('teste', new FormControl([]));
    this.form.get('teste')?.valueChanges.subscribe(console.log)
  }

  items: SelectModel[] = [
    { name: 'Pessoa 1', value: 1, selected: true },
    { name: 'Pessoa 2', value: 2, selected: true },
    { name: 'Pessoa 3', value: 3, selected: true },
    { name: 'Pessoa 4', value: 4, selected: true },
    { name: 'Pessoa 5', value: 5, selected: true },
    { name: 'Pessoa 6', value: 6, selected: false },
    { name: 'Pessoa 7', value: 7, selected: false },
    { name: 'Pessoa 8', value: 8, selected: false },
    { name: 'Pessoa 9', value: 9, selected: false },
    { name: 'Pessoa 10', value: 10, selected: false },
  ]
  form: FormGroup = new FormGroup({})
}

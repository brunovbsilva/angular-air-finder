import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectModel } from 'src/app/shared/component/select/models/select.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  items: SelectModel[] = [
    { name: 'Pessoa 1', value: 1 },
    { name: 'Pessoa 2', value: 2 },
    { name: 'Pessoa 3', value: 3 },
    { name: 'Pessoa 4', value: 4 },
    { name: 'Pessoa 5', value: 5 },
    { name: 'Pessoa 6', value: 6 },
    { name: 'Pessoa 7', value: 7 },
    { name: 'Pessoa 8', value: 8 },
    { name: 'Pessoa 9', value: 9 },
    { name: 'Pessoa 10', value: 10 },
  ]
  form: FormGroup = new FormGroup({})

  ngOnInit(): void {
    this.form.addControl('teste', new FormControl([]));
  }

  ngAfterViewInit(): void { }
}
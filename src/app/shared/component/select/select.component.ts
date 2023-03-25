import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectModel } from './models/select.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() form: FormGroup = new FormGroup({});
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() items: SelectModel[] = []
  @Input() name: string = ''
  public valuesSelected: SelectModel[] = [];
  public open: boolean = false;
  public selectAll: boolean = false;

  constructor(private eRef: ElementRef) { }

  remove(item: SelectModel): void {
    const index = this.valuesSelected.indexOf(item);

    if (index >= 0) {
      this.valuesSelected.splice(index, 1);
    }

    this.form.get(this.name)?.patchValue(this.createFormFormat());

    this.selectAll = this.valuesSelected.length == this.items.length
  }

  selected(event: string | number): void {
    const value = this.items.find(x => x.value == event);
    if(!this.valuesSelected.find(x => x == value) && value){
      this.valuesSelected.push(value);
      this.form.get(this.name)?.patchValue(this.createFormFormat());
    }
    else{
      if(value)
        this.remove(value);
    }

    this.selectAll = this.valuesSelected.length == this.items.length
  }

  checked(value: string | number) {
    return this.valuesSelected.find(x => x.value == value) != undefined;
  }

  indeterminated() {
    return this.valuesSelected.length < this.items.length && this.valuesSelected.length != 0
  }

  toggleSelectAll() {
    this.selectAll = !this.selectAll;
    if(this.selectAll){
      this.items.forEach(item => {
        if(this.valuesSelected.filter(x => x == item).length == 0){
          this.valuesSelected.push(item);
        }
      })
    }
    else {
      this.valuesSelected = [];
    }

    this.form.get(this.name)?.patchValue(this.createFormFormat());
  }

  createFormFormat() {
    var result: (string | number)[] = [];
    this.valuesSelected.forEach(x => {
      result.push(x.value);
    })
    return result;
  }

  @HostListener('document:click', ['$event'])
  clickout(event : any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.open = false;
    }
  }
}

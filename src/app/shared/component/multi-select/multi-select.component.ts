import { Component, Input, OnInit } from '@angular/core';
import { SelectModel } from '../select/models/select.model';
import { MatDialog } from '@angular/material/dialog';
import { SelectDialogComponent } from './select-dialog/select-dialog.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  @Input() items!: SelectModel[];
  @Input() label: string = '';
  @Input() form!: FormGroup;
  @Input() name!: string;

  get trigger(): string[] {
    return this.items.filter(x => x.selected).map(x => x.name);
  };

  get value(): (string | number)[]{
    return this.items.filter(x => x.selected).map(x => x.value);
  }

  get control() {
    return this.form.get(this.name)!;
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.control.patchValue(this.value);
  }

  openSelectDialog(): void {
    const dialogRef = this.dialog.open(SelectDialogComponent, {
      width: '400px',
      data: { 
        items: this.items,
        label: this.label
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.items.forEach(x => {
        x.selected = result.includes(x.value);
      });
      if(this.value != this.control.value){
        console.log(this.value, this.control.value);
        this.control.patchValue(this.value);
      }
        
    })
  }
}

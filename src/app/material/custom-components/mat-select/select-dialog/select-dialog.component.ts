import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.scss']
})
export class SelectDialogComponent implements OnInit, AfterViewInit {

  public selectAll: boolean;
  public indeterminated: boolean;

  constructor(
    public dialogRef: MatDialogRef<SelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      options: MatOption[],
      placeholder: string,
      multiple: boolean
    }
  ) {}

  ngOnInit(): void {
    this.checkSelectAllState();
  }

  ngAfterViewInit(): void {
    this.dialogRef.backdropClick().subscribe(() => {
      this.subscribeResults();
    })
  }

  public subscribeResults() {
    this.dialogRef.close();
  }

  public toggleSelectItem(value: MatOption): void {
    if(this.data.multiple) {
      !value.selected ? value.select() : value.deselect();
      this.checkSelectAllState();
    }
    else {
      if(!value.selected) value.select();
      this.subscribeResults();
    }
  }

  public toggleSelectAll() {
    this.data.options.filter(x => x.selected == this.selectAll).forEach(x => {
      this.selectAll ? x.deselect() : x.select();
    });
    this.checkSelectAllState();
  }

  private checkSelectAllState() {
    const selected = this.data.options.filter(v => v.selected).length;
    const all = this.data.options.length;
    
    if(selected == all){
      this.selectAll = true;
      this.indeterminated = false;
    }
    else {
      this.selectAll = false
      this.indeterminated = selected != 0;
    }
  }
}

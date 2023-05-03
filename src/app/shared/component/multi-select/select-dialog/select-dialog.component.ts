import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SelectModel } from '../../select/models/select.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectionList } from '@angular/material/list';

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
      items: SelectModel[],
      label: string
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
    this.dialogRef.close(
      this.data.items.filter(x => x.selected).map(x => x.value)
    );
  }

  public toggleSelectItem(value: string | number): void {
    const index = this.data.items.findIndex(x => x.value == value);
    this.data.items[index].selected = !this.data.items[index].selected;
    this.checkSelectAllState();
  }

  public toggleSelectAll() {
    this.data.items.filter(x => x.selected == this.selectAll).forEach(x => {
      x.selected = !this.selectAll;
    });
    this.checkSelectAllState();
  }

  private checkSelectAllState() {
    const selected = this.data.items.filter(v => v.selected).length;
    const all = this.data.items.length;
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

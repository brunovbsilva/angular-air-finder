import { Directive, ElementRef } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { SelectDialogComponent } from '../select-dialog/select-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Directive({
  selector: '[customOpen]',
})
export class CustomOpenDirective {

  private isDialogOpen = false;
  
  constructor(
    private matSelect: MatSelect, 
    private elRef: ElementRef,
    private dialog: MatDialog,
  ) 
  { }

  ngAfterViewInit() {
    this.matSelect.open = () => {
      if(!this.isDialogOpen){
        this.isDialogOpen = true;
        this.openSelectDialog();
        this.elRef.nativeElement.dispatchEvent(new Event('click'));
      }
    };
  }

  openSelectDialog(): void {
    const dialogRef = this.dialog.open(SelectDialogComponent, {
      width: '400px',
      data: { 
        options: this.matSelect.options.toArray(),
        placeholder: this.matSelect.placeholder,
        multiple: this.matSelect.multiple
      }
    });

    console.log(this.matSelect.options.toArray());

    dialogRef.afterClosed().subscribe(() => {
      this.isDialogOpen = false;
    });
  }
}
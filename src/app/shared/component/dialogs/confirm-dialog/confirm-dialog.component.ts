import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements AfterViewInit {
  constructor (
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngAfterViewInit(): void {
    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close(false);
    })
  }

  okClick() {
    this.dialogRef.close(true);
  }

  cancelClick() {
    this.dialogRef.close(false);
  }
}

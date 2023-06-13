import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GameCardDialogModel } from './model/game-card-dialog.model';

@Component({
  selector: 'app-game-card-dialog',
  templateUrl: './game-card-dialog.component.html',
  styleUrls: ['./game-card-dialog.component.scss']
})
export class GameCardDialogComponent {

  loading: boolean = false;
  
  constructor (
    public dialogRef: MatDialogRef<GameCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameCardDialogModel
  ) { }

  okClick() {
    this.dialogRef.close();
  }

  cancelClick() {
    this.dialogRef.close();
  }

}

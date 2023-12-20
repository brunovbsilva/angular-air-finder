import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GameDetails } from 'src/app/shared/services/models/game/responses/get-details-response.model';

@Component({
  selector: 'app-game-card-dialog',
  templateUrl: './game-card-dialog.component.html',
  styleUrls: ['./game-card-dialog.component.scss']
})
export class GameCardDialogComponent {

  loading: boolean = false;
  
  constructor (
    public dialogRef: MatDialogRef<GameCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameDetails
  ) { }

  okClick() {
    this.dialogRef.close();
  }

  cancelClick() {
    this.dialogRef.close();
  }

}

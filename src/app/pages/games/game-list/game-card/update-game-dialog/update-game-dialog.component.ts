import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { UpdateGameRequest } from 'src/app/shared/services/models/game/requests/update-game-request.model';
import { GameService } from 'src/app/shared/services/game.service';
import { CreateGameForm } from 'src/app/pages/games/game-list/game-card/forms/create-game/create-game.form';

@Component({
  selector: 'app-update-game-dialog',
  templateUrl: './update-game-dialog.component.html',
  styleUrls: ['./update-game-dialog.component.scss']
})
export class UpdateGameDialogComponent implements AfterViewInit {
  public loading: boolean = false;
  public updateGameForm: CreateGameForm = new CreateGameForm();

  constructor (
    public dialogRef: MatDialogRef<UpdateGameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateGameRequest,
    private gameService: GameService,
    private datePipe: DatePipe,
  ) { }

  ngAfterViewInit(): void {
    this.dialogRef.backdropClick().subscribe(() => this.dialogRef.close(false));
    setTimeout(() => {
      const date = new Date(this.data.dateFrom);
      const utcDate = new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate()
      );
      date.setHours(0, 0, 0, 0);
      this.updateGameForm.name.patchValue(this.data.name);
      this.updateGameForm.description.patchValue(this.data.description);
      this.updateGameForm.date.patchValue(utcDate);
      this.updateGameForm.timeFrom.patchValue(this.datePipe.transform(this.data.dateFrom, 'HH:mm', 'UTC'));
      this.updateGameForm.timeUpTo.patchValue(this.datePipe.transform(this.data.dateUpTo, 'HH:mm', 'UTC'));
      this.updateGameForm.maxPlayers.patchValue(this.data.maxPlayers);
    }, 1);
  }
  
  okClick() {
    if(!this.updateGameForm.valid) {
      this.updateGameForm.markAllAsDirty();
      return;
    }
    
    this.loading = true;
    const values = {
      ...this.updateGameForm.getValues(),
      id: this.data.id
    };
    this.gameService.updateGame(values)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: () => this.dialogRef.close(true)
      });
  }

  cancelClick() {
    this.dialogRef.close(false);
  }
}

import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { GameService } from 'src/app/pages/games/service/game.service';
import { CreateGameForm } from 'src/app/shared/form/components/create-game/create-game.form';

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
    @Inject(MAT_DIALOG_DATA) public data: { gameId: string, gameName: string, gameDescription: string, gameDate: number },
    private gameService: GameService,
    private datePipe: DatePipe,
  ) { }

  ngAfterViewInit(): void {
    this.dialogRef.backdropClick().subscribe(() => this.dialogRef.close(false));
    setTimeout(() => {
      this.updateGameForm.name.patchValue(this.data.gameName);
      this.updateGameForm.description.patchValue(this.data.gameDescription);
      this.updateGameForm.date.patchValue(new Date(
        Number(this.datePipe.transform(this.data.gameDate, 'YYYY', 'UTC')),
        Number(this.datePipe.transform(this.data.gameDate, 'MM', 'UTC'))-1,
        Number(this.datePipe.transform(this.data.gameDate, 'dd', 'UTC'))
      ));
      this.updateGameForm.time.patchValue(this.datePipe.transform(this.data.gameDate, 'HH:mm', 'UTC'));
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
      id: this.data.gameId
    }
    this.gameService.updateGame(values)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (res) => {
          this.dialogRef.close(true);
        }
      })
  }

  cancelClick() {
    this.dialogRef.close(false);
  }
}

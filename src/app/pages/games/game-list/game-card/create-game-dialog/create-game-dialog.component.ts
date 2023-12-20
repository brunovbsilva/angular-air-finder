import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';
import { GameService } from 'src/app/shared/services/game.service';
import { CreateBattlegroundForm } from 'src/app/pages/games/game-list/game-card/forms/create-battleground/create-battleground.form';
import { CreateGameForm } from 'src/app/pages/games/game-list/game-card/forms/create-game/create-game.form';
import { BattlegroundService } from 'src/app/shared/services/battleground.service';
import { Battleground } from 'src/app/pages/games/models/dtos/battleground.model';
import { CreateGameEnum } from './enum/create-game-enum.model';
import { ConfirmDialogComponent } from 'src/app/shared/component/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-create-game-dialog',
  templateUrl: './create-game-dialog.component.html',
  styleUrls: ['./create-game-dialog.component.scss']
})
export class CreateGameDialogComponent implements OnInit {

  public get typeEnum() { 
    return {
      createGame:         CreateGameEnum.createGame,
      createBattleground: CreateGameEnum.createBattleground,
      selectBattleground: CreateGameEnum.selectBattleground
    }
  }

  public gameForm = new CreateGameForm();
  public battlegroundForm = new CreateBattlegroundForm();
  public gameLoading: boolean = false;
  public battlegroundLoading: boolean = false;
  public dialogType: CreateGameEnum = CreateGameEnum.createGame;
  public battlegrounds: Battleground[] = [];
  public selectedBattleground?: Battleground = undefined;

  constructor (
    public dialogRef: MatDialogRef<CreateGameDialogComponent>,
    private gameService: GameService,
    private battlegroundService: BattlegroundService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.populateBattlegrounds(true);
  }

  populateBattlegrounds(initialPopulate: boolean = false) {
    this.battlegroundService.getBattlegrounds().subscribe({
      next: response => {
        this.battlegrounds = response.battlegrounds;
        if(initialPopulate) this.selectedBattleground = this.battlegrounds[0] ?? undefined;
      }
    });
  }

  showOkButton() {
    return this.dialogType == CreateGameEnum.createGame ||
      this.dialogType == CreateGameEnum.createBattleground
  }

  okClick() {
    if(this.dialogType == CreateGameEnum.createGame) this.okClickGame();
    if(this.dialogType == CreateGameEnum.createBattleground) this.okClickBattleground();
  }

  cancelClick() {
    this.dialogRef.close();
  }

  setDialogType(type: CreateGameEnum) {
    this.dialogType = type;
  }

  private openSnackBar(msg: string, act: string = ''){
    this._snackBar.open(msg, act, {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
    }); 
  }

  // region Create Game
  okClickGame() {
    if(!this.gameForm.valid) {
      this.gameForm.markAllAsDirty();
      return;
    }
    if(!this.selectedBattleground){
      this.openSnackBar('Please, select a battleground');
      return;
    }

    this.gameLoading = true;
    const values = {
      ...this.gameForm.getValues(),
      idBattleground: this.selectedBattleground!.id
    };
    this.gameService.createGame(values)
      .pipe(finalize(() => this.gameLoading = false))
      .subscribe({
        next: (res) => this.dialogRef.close()
      })
  }

  // region Select Battleground
  onDeleteEvent(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      'maxWidth': '300px',
      'width': '94%',
      'data': 'Are you sure?'
    });

    dialogRef.afterClosed().subscribe({
      next: confirm => { if(confirm) {
        this.battlegroundService.deleteBattleground(id).subscribe({
          next: () => this.populateBattlegrounds()
        });
        if(this.selectedBattleground!.id == id) this.selectedBattleground = this.battlegrounds[0] ?? undefined;
      }}
    });
  }
  
  // region Create Battleground
  okClickBattleground() {
    if(!this.battlegroundForm.valid) {
      this.battlegroundForm.markAllAsDirty();
      return;
    }

    this.battlegroundLoading = true;
    const values = this.battlegroundForm.getValues();
    this.battlegroundService.createBattleground(values)
      .pipe(finalize(() => this.battlegroundLoading = false))
      .subscribe({
        next: (res) => {
          this.dialogType = CreateGameEnum.selectBattleground;
          this.populateBattlegrounds();
        }
      })
  }
}

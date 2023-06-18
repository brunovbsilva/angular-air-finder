import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameService } from '../service/game.service';
import { ListGamesRequest } from '../models/list-games-request.model';
import { PageEvent } from '@angular/material/paginator';
import { PageConfig } from 'src/app/material/models/page-config.model';
import { finalize } from 'rxjs';
import { CreateGameDialogComponent } from 'src/app/shared/component/dialogs/create-game-dialog/create-game-dialog.component';
import { GameCardDialogComponent } from 'src/app/shared/component/dialogs/game-card-dialog/game-card-dialog.component';
import { GameTabOptions } from '../models/game-tab/game-tab-options.model';
import { ConfirmDialogComponent } from 'src/app/shared/component/dialogs/confirm-dialog/confirm-dialog.component';
import { UpdateGameDialogComponent } from 'src/app/shared/component/dialogs/update-game-dialog/update-game-dialog.component';
import { GameCard } from '../models/game-card.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public loading: boolean = false;
  public games: GameCard[] = [];
  public pageConfig: PageConfig = new PageConfig();
  @Input() options: GameTabOptions = new GameTabOptions();

  constructor(
    private dialog: MatDialog,
    private service: GameService
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(request: ListGamesRequest = new ListGamesRequest()) {
    this.loading = true;
    this.pageConfig.pageSize = request.itemsPerPage;
    request.fromDate = this.options.fromDate?.getTime() ?? undefined;
    request.upToDate = this.options.upToDate?.getTime() ?? undefined;
    this.service.listGames(request, this.options.gameStatusList, this.options.joinStatusList)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (response) => {
          this.games = response.games;
          this.pageConfig.pageIndex = response.pageIndex;
          this.pageConfig.length = response.length;
        }
      });
  }

  updatePage(e: PageEvent) {
    const request: ListGamesRequest = { pageIndex: e.pageIndex, itemsPerPage: this.pageConfig.pageSize }
    this.getList(request)
  }

  openFilterDialog() {
    
  }

  openCreateGameDialog() {
    const dialogRef = this.dialog.open(CreateGameDialogComponent, {
      'maxWidth': '1000px',
      'width': '94%'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getList();
    })
  }

  onDelete(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      'maxWidth': '300px',
      'width': '94%',
      'data': 'Are you sure?'
    });

    dialogRef.afterClosed().subscribe({
      next: confirm => { if(confirm) this.service.deleteGame(id).subscribe({
        next: res => this.getList()
      });}
    });
  }

  onUpdate(gameId: string) {
    this.games.find(x => x.id == gameId)!.loading = true;
    this.service.getDetails(gameId)
      .pipe(finalize(() => this.games.find(x => x.id == gameId)!.loading = false))
      .subscribe({
        next: res => {
          const dialogRef = this.dialog.open(UpdateGameDialogComponent, {
            'maxWidth': '1000px',
            'width': '94%',
            'data': { gameId: gameId, gameName: res.game.name, gameDescription: res.game.description, gameDate: res.game.date }
          });
      
          dialogRef.afterClosed().subscribe({
            next: confirm => { if(confirm) this.getList() }
          })
        }
    })
    
  }

  onInfo(id:string) {
    this.openDialog(id);
  }

  private openDialog(id: string) {
    this.service.getDetails(id).subscribe({
      next: response => {
        const dialogRef = this.dialog.open(GameCardDialogComponent, {
          width: '400px',
          data: response.game
        });
      }
    });
  }

  onJoin(id: string) {
    this.service.joinGame(id).subscribe({
      next: () => this.getList()
    });
  }

  onLeave(id: string) {
    this.service.leaveGame(id).subscribe({
      next: () => this.getList()
    });
  }

  onPay(id: string) {
    console.log(`paid out: ${id}`);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameService } from '../../../shared/services/game.service';
import { ListGamesRequest } from '../../../shared/services/models/game/requests/list-games-request.model';
import { PageEvent } from '@angular/material/paginator';
import { PageConfig } from 'src/app/material/models/page-config.model';
import { finalize } from 'rxjs';
import { GameCardDialogComponent } from 'src/app/pages/games/game-list/game-card/game-card-dialog/game-card-dialog.component';
import { ConfirmDialogComponent } from 'src/app/shared/component/dialogs/confirm-dialog/confirm-dialog.component';
import { UpdateGameDialogComponent } from 'src/app/pages/games/game-list/game-card/update-game-dialog/update-game-dialog.component';
import { UpdateGameRequest } from '../../../shared/services/models/game/requests/update-game-request.model';
import { GameStatus } from '../models/enums/game-status.enum';
import { CardOptions } from 'src/app/pages/games/game-list/game-card/create-game-dialog/models/card-options.model';
import { GamePaymentStatus } from '../models/enums/game-payment-status.enum';
import { GameCard } from '../../../shared/services/models/game/responses/get-list-response.model';
import { GameTabOptions } from '../models/game-tab/game-tab.model';
import { CreateGameDialogComponent } from './game-card/create-game-dialog/create-game-dialog.component';

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
    request.gameStatus = this.options.gameStatus;
    this.service.listGames(request)
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
    const request: ListGamesRequest = { pageIndex: e.pageIndex, itemsPerPage: this.pageConfig.pageSize, gameStatus: GameStatus.Created }
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

  getOptions(gameCard: GameCard): CardOptions {
    return {
      color: ([GamePaymentStatus.Joined, GamePaymentStatus.Paid].includes(gameCard.gamePaymentStatus) || gameCard.canDelete) ? 'primary' : 'accent',
      highlighted: this.options.gameStatus != GameStatus.Finished,
      showActions: this.options.gameStatus != GameStatus.Finished,
    }
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
          const request: UpdateGameRequest = {
            id: gameId,
            ...res.game
          }
          const dialogRef = this.dialog.open(UpdateGameDialogComponent, {
            'maxWidth': '1000px',
            'width': '94%',
            'data': request
          });
      
          dialogRef.afterClosed().subscribe({next: confirm => { if(confirm) this.getList() }});
        }
    })
    
  }

  onInfo(id:string) {
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
    this.service.payGame(id).subscribe({
      next: () => this.getList()
    });
  }
}

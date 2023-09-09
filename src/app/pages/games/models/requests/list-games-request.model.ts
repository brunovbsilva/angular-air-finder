import { GameStatus } from "../enums/game-status.enum";

export class ListGamesRequest {
    pageIndex: number = 0;
    itemsPerPage: number = 36;
    gameStatus: GameStatus = GameStatus.All;
}
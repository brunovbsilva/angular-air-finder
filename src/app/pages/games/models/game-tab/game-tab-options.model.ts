import { GameStatus } from "../enums/game-status.enum";

export class GameTabOptions {
  canFilter?: boolean = false;
  canCreateGame?: boolean = false;
  gameStatus: GameStatus = GameStatus.All;
  title: string = '';
}
import { GameStatus } from "../enums/game-status.enum";

export class GameTab {
  nameResource!: string;
  options: GameTabOptions;
}

export class GameTabOptions {
  canFilter?: boolean = false;
  canCreateGame?: boolean = false;
  gameStatus: GameStatus = GameStatus.All;
  titleResource: string = '';
}
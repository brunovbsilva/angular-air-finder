import { GameLogStatus } from "../enums/game-log-status.enum";
import { GameStatus } from "../enums/game-status.enum";

export class GameTabOptions {
  canFilter?: boolean = false;
  canCreateGame?: boolean = false;
  fromDate?: Date = undefined;
  upToDate?: Date = undefined;
  gameStatusList?: GameStatus[] = undefined;
  joinStatusList?: GameLogStatus[] = undefined;
  title: string = '';
}
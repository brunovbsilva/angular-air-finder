import { GameLogStatus } from "src/app/pages/games/models/enums/game-log-status.enum";
import { GameStatus } from "src/app/pages/games/models/enums/game-status.enum";

export class GameCard {
    id: string = '';
    name: string = '';
    local: string = '';
    date: Date = new Date();
    imageUrl: string = '';
    canDelete: boolean = false;
    verified: boolean = false;
    joinStatus: GameLogStatus = GameLogStatus.None;
    gameStatus: GameStatus = GameStatus.None;
    loading?: boolean = false;
}
import { BaseResponse } from "src/app/shared/services/models/base-response";
import { Battleground } from "../../../../../pages/games/models/dtos/battleground.model";

export class GetDetailsResponse extends BaseResponse {
    game: GameDetails
}

export class GameDetails {
    battleground: Battleground;
    dateFrom: number;
    dateUpTo: number;
    description: string;
    name: string;
    maxPlayers: number;
}
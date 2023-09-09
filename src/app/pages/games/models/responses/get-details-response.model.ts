import { BaseResponse } from "src/app/shared/models/response/base-response";
import { Battleground } from "../dtos/battleground.model";

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
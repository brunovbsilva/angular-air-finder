import { GameCard } from "src/app/pages/games/models/game-card.model";
import { BaseResponse } from "src/app/shared/models/response/base-response";

export class GetListResponse extends BaseResponse {
    games: GameCard[] = [];
    length: number = 0;
    pageIndex: number = 0;
}
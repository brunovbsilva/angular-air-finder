import { BaseResponse } from "src/app/shared/models/response/base-response";
import { GamePaymentStatus } from "../enums/game-payment-status.enum";

export class GetListResponse extends BaseResponse {
    games: GameCard[] = [];
    length: number = 0;
    pageIndex: number = 0;
}

export class GameCard {
    id: string = '';
    creatorId: string = '';
    name: string = '';
    local: string = '';
    dateFrom: Date = new Date();
    dateUpTo: Date = new Date();
    maxPlayers: number = 0;
    players: number = 0;
    imageUrl: string = '';
    verified: boolean = false;
    gamePaymentStatus: GamePaymentStatus = GamePaymentStatus.NotJoined;
    canDelete: boolean = false;
    loading?: boolean = false;
}
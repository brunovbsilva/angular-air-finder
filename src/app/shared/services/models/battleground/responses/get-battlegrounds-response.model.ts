import { BaseResponse } from "src/app/shared/services/models/base-response";
import { Battleground } from "../../../../../pages/games/models/dtos/battleground.model";

export class GetBattlegroundsResponse extends BaseResponse {
  battlegrounds: Battleground;
}
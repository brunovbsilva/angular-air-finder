import { BaseResponse } from "src/app/shared/models/response/base-response";
import { Battleground } from "../dtos/battleground.model";

export class GetBattlegroundsResponse extends BaseResponse {
  battlegrounds: Battleground;
}
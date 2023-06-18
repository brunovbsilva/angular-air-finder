import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from 'src/app/app-config.service';
import { QueryString } from 'src/app/shared/utils/query-string.extention';
import { ListGamesRequest } from '../models/list-games-request.model';
import { GetListResponse } from '../models/get-list-response.model';
import { GetDetailsResponse } from '../models/get-details-response.model';
import { QueryStringArray } from 'src/app/shared/utils/query-string-array.extention';
import { GameLogStatus } from '../models/enums/game-log-status.enum';
import { CreateGameRequest } from '../models/create-game-request.model';
import { BaseResponse } from 'src/app/shared/models/response/base-response';
import { UpdateGameRequest } from '../models/update-game-request.model';
import { JoinGameRequest } from '../models/join-game-request.model';
import { GameStatus } from '../models/enums/game-status.enum';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(
    private http: HttpClient, 
    private appConfig: AppConfigService
  ) { }

  public createGame(request: CreateGameRequest) {
    const url = `${this.appConfig.config?.url_api}api/game`;
    return this.http
      .post<BaseResponse>(url, request);
  }

  public listGames(request: ListGamesRequest, gameStatusList?: GameStatus[], joinStatusList?: GameLogStatus[]) {
    const queryString = QueryString.toString(request);
    const queryJoinStatusArray = joinStatusList ? '&joinStatusList='+QueryStringArray.toString(joinStatusList) : '';
    const queryGameStatusArray = gameStatusList ? '&gameStatusList='+QueryStringArray.toString(gameStatusList) : '';
    const url = `${this.appConfig.config?.url_api}api/game?${queryString}${queryGameStatusArray}${queryJoinStatusArray}`;
    return this.http
      .get<GetListResponse>(url);
  }

  public getDetails(id: string) {
    const url = `${this.appConfig.config?.url_api}api/game/${id}`;
    return this.http
      .get<GetDetailsResponse>(url);
  }

  public updateGame(request: UpdateGameRequest) {
    const url = `${this.appConfig.config?.url_api}api/game`;
    return this.http
      .put<BaseResponse>(url, request);
  }

  public deleteGame(id: string) {
    const url = `${this.appConfig.config?.url_api}api/game/${id}`;
    return this.http
      .delete<BaseResponse>(url);
  }

  public joinGame(id: string) {
    const url = `${this.appConfig.config?.url_api}api/game/join/${id}`;
    return this.http
      .post<BaseResponse>(url, undefined);
  }

  public leaveGame(id: string) {
    const url = `${this.appConfig.config?.url_api}api/game/leave/${id}`;
    return this.http
      .delete<BaseResponse>(url, undefined);
  }

  public validateQRCode(request: any) {
    const url = `${this.appConfig.config?.url_api}api/game/validate`;
    return this.http
      .post<BaseResponse>(url, request);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from 'src/app/app-config.service';
import { QueryString } from 'src/app/shared/utils/query-string.extention';
import { ListGamesRequest } from '../models/requests/list-games-request.model';
import { GetListResponse } from '../models/responses/get-list-response.model';
import { GetDetailsResponse } from '../models/responses/get-details-response.model';
import { CreateGameRequest } from '../models/requests/create-game-request.model';
import { BaseResponse } from 'src/app/shared/models/response/base-response';
import { UpdateGameRequest } from '../models/requests/update-game-request.model';
import { ValidateGameJoinRequest } from '../models/requests/validate-game-join-request.model';

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

  public listGames(request: ListGamesRequest) {
    const queryString = QueryString.toString(request);
    const url = `${this.appConfig.config?.url_api}api/game?${queryString}`;
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

  public payGame(id: string) {
    const url = `${this.appConfig.config?.url_api}api/game/pay/${id}`;
    return this.http
      .post<BaseResponse>(url, undefined);
  }

  public validateGameJoin(request: ValidateGameJoinRequest) {
    const url = `${this.appConfig.config?.url_api}api/game/validate`;
    return this.http
      .post<BaseResponse>(url, request);
  }
}

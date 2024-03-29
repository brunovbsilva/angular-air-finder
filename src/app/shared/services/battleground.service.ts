import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from 'src/app/app-config.service';
import { CreateBattlegroundRequest } from './models/battleground/requests/create-battleground-request.model';

@Injectable({
  providedIn: 'root'
})
export class BattlegroundService {

  constructor(
    private http: HttpClient, 
    private appConfig: AppConfigService
  ) { }
  
  createBattleground(request: CreateBattlegroundRequest) {
    const url = `${this.appConfig.config?.url_api}api/battleground`;
    return this.http
      .post<any>(url, request);
  };

  getBattlegrounds() {
    const url = `${this.appConfig.config?.url_api}api/battleground`;
    return this.http
      .get<any>(url);
  }

  deleteBattleground(id: string) {
    const url = `${this.appConfig.config?.url_api}api/battleground/${id}`;
    return this.http
      .delete<any>(url);
  }

  updateBattleground(id: string, request: any) {
    const url = `${this.appConfig.config?.url_api}api/battleground/${id}`;
    return this.http
      .put<any>(url, request);
  }
}

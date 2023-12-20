import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/app-config.service';
import { BaseResponse } from './models/base-response';
import { SearchPeopleRequest } from './models/person/requests/search-people.request';
import { SearchPeopleResponse } from './models/person/responses/search-people.response';
import { UpdateProfileRequest } from './models/person/requests/update-profile.request';
import { GetPersonDetailsResponse } from './models/person/responses/get-person-details.response';
import { QueryString } from '../utils/query-string.extention';
import { UpdateProfileResponse } from './models/person/responses/update-profile.response';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl: string;

  constructor(
    private http: HttpClient, 
    private appConfig: AppConfigService
  ) {
    this.baseUrl = `${this.appConfig.config?.url_api}api/person`;
  }

  public searchPeople(request: SearchPeopleRequest): Observable<SearchPeopleResponse> {
    const url = `${this.baseUrl}?${QueryString.toString(request)}`;
    return this.http
      .get<SearchPeopleResponse>(url);
  }
  public updateProfile(request: UpdateProfileRequest): Observable<UpdateProfileResponse> {
    const formData = this.buildFormData(request);
    return this.http
      .put<UpdateProfileResponse>(this.baseUrl, formData);
  }
  public getPersonDetails(personId?: string): Observable<GetPersonDetailsResponse> {
    const url = `${this.baseUrl}/details?${QueryString.toString(personId)}`;
    return this.http
      .get<GetPersonDetailsResponse>(url);
  }

  private buildFormData(request: UpdateProfileRequest): FormData {
    const formData = new FormData();
    if (request.name) formData.append('Name', request.name);
    if (request.email) formData.append('Email', request.email);
    if (request.phone) formData.append('Phone', request.phone);
    if (request.image) formData.append('Image', request.image);
    return formData;
  }
}
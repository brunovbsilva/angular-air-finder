import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'https://viacep.com.br/ws/{0}/json/';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  constructor(private http: HttpClient) { }

  getAddress(cep: string) {
    return this.http
      .get<any>(url.replace('{0}', cep));
  }
}

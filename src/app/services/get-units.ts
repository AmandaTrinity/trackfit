import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitResponse } from '../types/unites-response.interface';

@Injectable({
  providedIn: 'root',
})
export class GetUnits {
  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"

  constructor(private httpClient: HttpClient){}

  getAllUnits(): Observable<UnitResponse> {
    return this.httpClient.get<UnitResponse>(this.apiUrl)
  }
}

//O filtro vai ficar para o lado do cliente(frontend), isso não é boa prática e caso sejam muitos resultados, podem acabar travando, normalmente isso é responsabilidade do back end
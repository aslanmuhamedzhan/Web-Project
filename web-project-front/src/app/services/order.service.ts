import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {AuthToken} from 'src/app/models'

const BASE_URL = 'http://localhost:8000'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  create(data:any):Observable<any> {
    return this.http.post(`${BASE_URL}/api/orders/`, data);
  }

  login(username:any, password:any  ): Observable<AuthToken> {
    return this.http.post<AuthToken>(`http://localhost:8000/api/login/`, {
      username,
      password
    });
  }
}
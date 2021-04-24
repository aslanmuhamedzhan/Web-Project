import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const BASE_URL = 'http://localhost:8000'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  create(data:any):Observable<any> {
    return this.http.post(`${BASE_URL}/api/orders/`, data);
  }
}

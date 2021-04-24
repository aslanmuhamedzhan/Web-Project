import { ProductService } from 'src/app/services/product.service';
import { Product } from './../models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [
    {id: 1, name: 'adidas krasofki'},
    {id: 2, name: 'nike krasofki'}
  ];

  ROOT_URL = 'http://localhost:8000';

  constructor(private http: HttpClient,
              private prService: ProductService) { }

  getCategories() {
    return this.categories;
  }

  // getCategories(): Observable<Category[]> {
  //   return this.http.get<Category[]>(`${this.ROOT_URL}/api/categories/`);     //Gotta implement Endpoint with Serializer at the Django side
  // }

}

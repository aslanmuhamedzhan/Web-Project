import { Product } from './../models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ROOT_URL = 'http://localhost:8000';
  products: Product[] = [
    {id: 1, name: "Product1", price: 16, img: "https://www.motustriathlon.com/images/stories/virtuemart/product/SCARPA-ONRUNNING-CLOUDULTRA-MEN-000044M-white-black.jpg", category: 1},
    {id: 2, name: "Product2", price: 17, img: "https://www.motustriathlon.com/images/stories/virtuemart/product/SCARPA-ONRUNNING-CLOUDULTRA-MEN-000044M-white-black.jpg", category: 2},
    {id: 3, name: "Product3", price: 19, img: "https://www.motustriathlon.com/images/stories/virtuemart/product/SCARPA-ONRUNNING-CLOUDULTRA-MEN-000044M-white-black.jpg", category: 2},
    {id: 4, name: "Product4", price: 19, img: "https://www.motustriathlon.com/images/stories/virtuemart/product/SCARPA-ONRUNNING-CLOUDULTRA-MEN-000044M-white-black.jpg", category: 2}
  ]


  constructor(private http: HttpClient) { }

  getProductItems() {
    return this.products;
  }

  // getProductItems():Observable<Product[]>{
  //   return this.http.get<Product[]>('${this.ROOT_URL}/api/products/all');
  // }
}

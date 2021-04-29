import { ProductService } from 'src/app/services/product.service';
import { Category, Product } from 'src/app/models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductsService {
  category: Category;
  products: Product[] = [];

  constructor(private prService: ProductService, category: Category) { 

    this.category = category;

    prService.getProductItems().subscribe((products)=>{
      products.forEach((element)=>{
        if (element.category.id == this.category.id) {
          this.products.push(element);
        }
      })
    })
  }

  getProducts() {
    return this.products;
  }
}

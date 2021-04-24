import { ProductService } from './../../../services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models';
import { Product } from './../../../models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  products: Product[] = [];
  category!: Category;
  allCategories: Category[] = [];

  constructor(private route: ActivatedRoute, 
              private catService: CategoryService,
              private prService: ProductService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.allCategories = this.catService.getCategories();
    this.category = this.allCategories.find(category => category.id === parseInt(id!))!;

    this.prService.getProductItems().forEach((element)=>{
      if (element.category == this.category.id) {
        this.products.push(element);
      }
    })
  }



}

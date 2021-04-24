import { Product } from './../../../models';
import { CartService } from './../../../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product!: Product;

  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartService.addToCart(this.product)
  }

  ngOnInit(): void {
    
  }

}

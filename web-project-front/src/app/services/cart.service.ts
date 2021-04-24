import { Product } from './../models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsInCart: Product[] = [
    
  ];

  addToCart(item: Product) {
    this.itemsInCart.push(item);
  }

  getCartItems() {
    return this.itemsInCart;
  }

  clearCart() {
    this.itemsInCart = [];
    return this.itemsInCart;
  }

  isEmpty() {
    return this.itemsInCart.length == 0;
  }

  constructor() { }
}

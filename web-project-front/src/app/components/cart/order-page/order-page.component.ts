import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {


  order = {
    OrdererAdress:'',
    OrdererFirstName:'' ,
    OrdererLastName: '',
    OrdererPostalCode: '',
  };

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }
  createOrder():void {
    const data = {
      ordererAdress: this.order.OrdererAdress,
      ordererFirstName: this.order.OrdererFirstName,
      ordererLastName: this.order.OrdererLastName,
      ordererPostalCode: this.order.OrdererPostalCode,
    };

    this.orderService.create(data).subscribe();
  }

}


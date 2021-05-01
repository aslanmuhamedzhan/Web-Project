import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logged=false;
  username="";
  password="";
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    const token=localStorage.getItem('token');
    if(token){
      this.logged=true;
    }
  }

  login(){
    // console.log(this.username, this.password);
    this.orderService.login(this.username, this.password).subscribe(data=>{
      console.log(data);
      localStorage.setItem('token', data.token)
    })
    const token=localStorage.getItem('token');
    if(token){
      this.logged=true;
      this.username='';
      this.password='';
    }else{
      alert("Please try again, information is incorrect");
    }
  }

  logout(){
    this.logged=false;
    localStorage.removeItem('token');
  }
}
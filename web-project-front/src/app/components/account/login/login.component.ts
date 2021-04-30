import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  logged=false;
  username="";
  password="";
  
  login(){
    console.log(this.username, this.password);
  }

  ngOnInit(): void {
  }

}

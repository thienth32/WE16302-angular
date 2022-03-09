import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input('parent-data') parentData: string = "";
  @Output() childChange = new EventEmitter<string>();
  name = "fpt poly"
  birthDate = "1991-02-03";

  thienth = {
    id: 1,
    name:"thienth",
    age: 30
  }
  count = 0;
  imgUrl = "https://vcdn1-dulich.vnecdn.net/2021/05/18/VnExpress-MauSon-10-1621330131.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=vcgUl191emOhjwo1IzIDQw";
  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.count++;
    // }, 1000)
  }

  increase(){
    this.count++;
    if(this.count == 10){
      this.childChange.emit(this.name);
    }
  }

  

}

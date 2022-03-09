import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes: Array<any> = [
    {
      code: "sgk",
      name: "Songoku",
      avatar: "https://i.pinimg.com/736x/d7/bd/23/d7bd2389fd03889edc309504c3377409.jpg",
      gender: "Nam"
    },
    {
      code: "mab",
      name: "Ma bư",
      avatar: "https://snkrvn.com/wp-content/uploads/2018/01/maxresdefault-960x640.jpg",
      gender: "Nam"
    }
  ];
  formHero: any = {
    code: "",
    name: "",
    avatar: "",
    gender: ""
  };

  remove(item: any){
    console.log(item);
  }
}

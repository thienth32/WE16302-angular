import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tạo 1 danh sách emenies gồm các object 
  // có thuộc tính: code, name, avatar, heathling (số)
  // amor (giáp)
  // hiển thị danh sách enemies ở phía dưới của danh sách heroes
  // thực hiện chức năng xóa enemies

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
    gender: "Nữ"
  };

  remove(hero: any){
    this.heroes = this.heroes.filter(item => item.code != hero.code);
  }

  submitForm(){
    const newHero = {...this.formHero};
    // tìm xem item ở form đã xuất hiện ở trong danh sách heroes hay chưa
    // nếu chưa xuất hiện thì thêm mới (push)
    // nếu có rồi thì cập nhật 
    this.heroes.push(newHero);
    this.formHero = {
      code: "",
      name: "",
      avatar: "",
      gender: "nữ"
    };
  }

  update(item:any){
    this.formHero = {...item};
  }
}

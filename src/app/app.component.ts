import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  heroes: Array<any> = [];
  formHero: any = {
    code: "",
    name: "",
    avatar: "",
    gender: "Nữ"
  };
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<any>("http://localhost:3000/heroes")
        .subscribe(data => {
          this.heroes = data;
        })
  }

  

  remove(hero: any){
    this.heroes = this.heroes.filter(item => item.code != hero.code);
  }

  submitForm(){
    const newHero = {...this.formHero};
    let index = -1;
    this.heroes.forEach((v, i) => {
      if(v.code == newHero.code){
        index = i;
        return;
      }
    });
    if(index == -1){
      this.heroes.push(newHero);
    }else{
      this.heroes[index] = newHero;
    }
    
    
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

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
    id: "",
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
    this.http.delete<any>(`http://localhost:3000/heroes/${hero.id}`)
      .subscribe(data => {
        this.heroes = this.heroes.filter(item => item.id != hero.id);
      })
    // console.log(hero);
    // this.heroes = this.heroes.filter(item => item.id != hero.id);
    
  }

  submitForm(){
    const newHero = {...this.formHero};

    if(newHero.id == ""){
      this.http.post<any>("http://localhost:3000/heroes", newHero)
        .subscribe(data => {
          this.heroes.push(data);
        })
    }else{
      this.http.put<any>(`http://localhost:3000/heroes/${newHero.id}`, newHero)
        .subscribe(data => {
          let index = -1;
          this.heroes.forEach((item, i) => {
            if(item.id == newHero.id){
              index = i;
            }
          })
          this.heroes[index] = data;
        });
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

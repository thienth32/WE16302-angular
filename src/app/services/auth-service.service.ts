import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient,
            private router: Router          
    ) { }

  login(email: String, googleId: String): Observable<any>{
    return this.http.get<any>(`${environment.user_api}?email=${email}&googleId=${googleId}`)
      .pipe(
        map((item) => {
          if(item.length > 0){
            localStorage.setItem('login_user', JSON.stringify(item[0]));
            return item[0];
          }
          return null;
        })
      )
  }

  logout(): void{
    localStorage.removeItem('login_user');
    this.router.navigate(['/login']);
  }
}

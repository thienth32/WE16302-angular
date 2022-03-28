import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(email: String, googleId: String): Observable<any>{
    return this.http.get<any>(`${environment.user_api}?email=${email}&googleId=${googleId}`)
      .pipe(
        map((item) => {
          console.log(item)
          return item;
        })
      )
  }
}
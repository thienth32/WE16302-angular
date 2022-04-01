import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  list(subject_code: string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/${subject_code}`);
  }
}

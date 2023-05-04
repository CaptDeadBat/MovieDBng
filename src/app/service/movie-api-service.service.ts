import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) {   }


  favApiData(): Observable<any> {
    
    return this.http.get('http://localhost:8081/user/1/favlist' , { responseType: 'text'});
  }

}

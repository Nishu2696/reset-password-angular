import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  heroku = "https://demo-app-reset.herokuapp.com/";

  constructor(
    private http: HttpClient
  ) { }

  register(reg_details): Observable<any>{
    return this.http.post(this.heroku + "register", reg_details)
  }

  login(log_details): Observable<any>{
    return this.http.post(this.heroku + "login", log_details)
  }

  reset(reset_details): Observable<any>{
    return this.http.post(this.heroku+ "changepassword", reset_details)
  }

  change(change_details): Observable<any>{
    return this.http.post(this.heroku+ "interchangepassword", change_details)
  }
}

import { LoginDto } from './../interfaces/loginDto';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private url= "http://localhost:8080/"
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',  accept: 'text/plain'}),
    responseType: 'text'
  };
  private url= "http://bvis.wfm.fg-bks.uni-koblenz.de:8080/"

  constructor(private http: HttpClient) { }

  login(credentials:LoginDto):Observable<HttpResponse<string>> {

    return this.http.post(this.url + "login", credentials,{observe:"response", responseType:"text"})
  }
}

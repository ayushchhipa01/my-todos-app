import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { API_URL } from '../app.constants';

export const TOKEN = "token";
export const AUTHENTICATED_USER = "authenticaterUser";

@Injectable({
  providedIn: 'root'
})
export class BasicAuthentication {

  constructor(
    private http : HttpClient
  ){}

  // Broadcasts login state changes instantly
  public isUserLoggedInSubject = new BehaviorSubject<boolean>(this.isUserLoggedIn());

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }  
  
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);

    return null;
  }


  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }


  executeAuthenticationService(username: string, password: string) {

    let basicAuthHeaderString = 'Basic ' + btoa(username + ":" + password);

      let headers = new HttpHeaders({
          Authorization: basicAuthHeaderString
        })

      return this.http.get<AuthenticationBean>(
        `${API_URL}/basic-auth`,
        {headers}).pipe(
          map(
            data => {
              sessionStorage.setItem(AUTHENTICATED_USER, username);
              sessionStorage.setItem(TOKEN, basicAuthHeaderString);
              this.isUserLoggedInSubject.next(true);
              return data;
            }
          )
        );
      // console.log("Execute Hello World Bean Service")
    }


  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    this.isUserLoggedInSubject.next(false);
  }

}

  export class AuthenticationBean{

    constructor(public message:string){

    }


  }

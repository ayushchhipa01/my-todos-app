import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthentication {

  constructor(
    private http : HttpClient
  ){}

  // Broadcasts login state changes instantly
  public isUserLoggedInSubject = new BehaviorSubject<boolean>(this.isUserLoggedIn());

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  authenticate(username: string, password: string) {
    if (username === 'in28minutes' && password === 'dummy') {
      sessionStorage.setItem('authenticaterUser', username);
      this.isUserLoggedInSubject.next(true); // <--- Notify subscribers
      return true;
    }
    return false;
  }

  executeAuthenticationService(username: string, password: string) {

    let basicAuthHeaderString = 'Basic ' + btoa(username + ":" + password);

      let headers = new HttpHeaders({
          Authorization: basicAuthHeaderString
        })

      return this.http.get<AuthenticationBean>(
        `http://localhost:8080/basic-auth`,
        {headers}).pipe(
          map(
            data => {
              sessionStorage.setItem('authenticaterUser', username);
              return data;
            }
          )
        );
      // console.log("Execute Hello World Bean Service")
    }


  logout() {
    sessionStorage.removeItem('authenticaterUser');
    this.isUserLoggedInSubject.next(false); // <--- Notify subscribers
  }

}

  export class AuthenticationBean{

    constructor(public message:string){

    }


  }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthentication {

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

  logout() {
    sessionStorage.removeItem('authenticaterUser');
    this.isUserLoggedInSubject.next(false); // <--- Notify subscribers
  }
}
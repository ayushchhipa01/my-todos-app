import { Service } from '@angular/core';

@Service()
export class HardcodedAuthentication {

    authenticate(username: string, password: string){
        // console.log("before " + this.isUserLoggedIn());
        if(username==="in28minutes" && password === 'dummy'){
            sessionStorage.setItem('authenticatedUser', username);
            // console.log("After " + this.isUserLoggedIn);
            return true;
        }
        return false;
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        return !(user === null)
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    getAuthenticatedUser(): string | null {
    return sessionStorage.getItem('authenticatedUser');
  }
}

import {HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthentication } from '../basic-authentication';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuth implements HttpInterceptor {
	
    constructor(
        private basicAuthentication: BasicAuthentication
    ){}

    intercept(request: HttpRequest<any>, next: HttpHandler){
        // let username = 'in28minutes'
        // let password = 'dummy'
        // let basicAuthHeaderString = 'Basic ' + btoa(username + ":" + password);
        let basicAuthHeaderString = this.basicAuthentication.getAuthenticatedToken();
        let username = this.basicAuthentication.getAuthenticatedUser();
        
        if(basicAuthHeaderString && username){

            request = request.clone({
                setHeaders : {
                    Authorization : basicAuthHeaderString
                }
            })
        }

        return next.handle(request)
    }
}

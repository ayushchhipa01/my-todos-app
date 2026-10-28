import {HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuth implements HttpInterceptor {
	

    intercept(request: HttpRequest<any>, next: HttpHandler){
        let username = 'in28minutes'
        let password = 'dummy'
        let basicAuthHeaderString = 'Basic ' + btoa(username + ":" + password);

        request = request.clone({
            setHeaders : {
                Authorization : basicAuthHeaderString
            }
        })

        return next.handle(request)
    }
}

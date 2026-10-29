import { NgClass } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeData {
    private http = inject(HttpClient);

    executeHelloWorldBeanService() {
        return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    }

    // http://localhost:8080/hello-world/path-variable/in28minutes

    executeHelloWorldServiceWithPathVariable(name: string) {

      // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

      // let headers = new HttpHeaders({
      //     Authorization: basicAuthHeaderString
      //   })

      return this.http.get<HelloWorldBean>(
        `http://localhost:8080/hello-world/path-variable/${name}`
        // {headers}
        );
      // console.log("Execute Hello World Bean Service")
    }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'in28minutes'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + btoa(`${username}:${password}`);
  //   return basicAuthHeaderString;
  // }
    
}  

import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
        return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    }
    
}  


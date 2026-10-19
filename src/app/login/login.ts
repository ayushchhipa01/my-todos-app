import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';


@Component({
  imports: [FormsModule, NgIf],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  username = 'in28minutes'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  // router 
  // dependency injection
  constructor(private router: Router,
     private hardcodedAuthentication: HardcodedAuthentication){}


  handleLogin(){
    // console.log(this.username);
    // console.log(this.password);
    if(this.hardcodedAuthentication.authenticate(this.username, this.password)){
      // redirect to welcome page
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    }
    else{
      this.invalidLogin = true
    }

  }

}

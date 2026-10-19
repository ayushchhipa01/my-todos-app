import { Component } from '@angular/core';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';

@Component({
  imports: [],
  selector: 'app-logout',
  styleUrl: './logout.css',
  templateUrl: './logout.html',
})
export class Logout {

  constructor(private hardcodedAuthentication : HardcodedAuthentication){

  }

  ngOnInit(){
    this.hardcodedAuthentication.logout();
  }
}

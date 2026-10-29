import { Component } from '@angular/core';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
import { BasicAuthentication } from '../service/basic-authentication';

@Component({
  imports: [],
  selector: 'app-logout',
  styleUrl: './logout.css',
  templateUrl: './logout.html',
})
export class Logout {

  constructor(//private hardcodedAuthentication : HardcodedAuthentication,
    private basicAuthentication : BasicAuthentication
  ){

  }

  ngOnInit(){
    this.basicAuthentication.logout();
  }
}

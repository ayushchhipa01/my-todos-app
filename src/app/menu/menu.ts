import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Added
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
import { NgIf } from '../../../node_modules/@angular/common/';


@Component({
  imports: [RouterLink, NgIf],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class Menu {
  // isUserLoggedIn : boolean = false;

  constructor(public hardcodedAuthentication : HardcodedAuthentication){}

  ngOnInit(){
    // this.isUserLoggedIn = this.hardcodedAuthentication.isUserLoggedIn();
  }
}

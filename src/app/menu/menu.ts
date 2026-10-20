import { Component, OnInit } from '@angular/core';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
  imports: [NgIf, RouterLink] // Add necessary imports for NgIf and RouterLink
})
export class Menu implements OnInit {
  
  // Track status locally so Angular detects the change immediately
  isLoggedIn: boolean = false;

  constructor(public hardcodedAuthentication: HardcodedAuthentication) { }

  ngOnInit() {
    // 1. Set initial state when component loads
    this.isLoggedIn = this.hardcodedAuthentication.isUserLoggedIn();

    // 2. Listen to live updates from the BehaviorSubject
    this.hardcodedAuthentication.isUserLoggedInSubject.asObservable().subscribe(
      status => {
        this.isLoggedIn = status;
      }
    );
  }
}
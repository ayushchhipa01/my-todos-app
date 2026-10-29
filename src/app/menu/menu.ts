import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { BasicAuthentication } from '../service/basic-authentication';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
  imports: [NgIf, RouterLink] // Add necessary imports for NgIf and RouterLink
})
export class Menu implements OnInit {
  
  // Track status locally so Angular detects the change immediately
  isLoggedIn: boolean = false;
  private cdr = inject(ChangeDetectorRef);

  constructor(//public hardcodedAuthentication: HardcodedAuthentication
    private basicAuthentication: BasicAuthentication
    
  ) { }

  ngOnInit() {
    this.refreshMenu();
  }

  refreshMenu() {
    // 1. Set initial state when component loads
    this.isLoggedIn = this.basicAuthentication.isUserLoggedIn();

    // 2. Listen to live updates from the BehaviorSubject
    this.basicAuthentication.isUserLoggedInSubject.asObservable().subscribe(
      status => {
        this.isLoggedIn = status;
        this.cdr.detectChanges(); // Force UI to refresh immediately after status change
      }
    );
  }
}
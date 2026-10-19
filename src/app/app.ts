import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { WelcomeComponent } from './welcome/welcome';
// import {Login} from './login/login'
import { Menu } from './menu/menu'; // Added Menu

import { Footer } from './footer/footer'; // Added Footer
@Component({
  imports: [RouterOutlet, Menu,  Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  //template: '<h1>{{title}}<h1>'

})
export class App {
  protected readonly title = signal('todo');
  message = "Welcome to in28minutes";
}

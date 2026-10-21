import { Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome';

import { Login } from './login/login';

import { Error } from './error/error';

import { Logout } from './logout/logout';
import { RouteGuard } from './service/route-guard';
import { TodoList } from './todo-list/todo-list';
import { TodoComponent } from './todo-component/todo-component';


export const routes: Routes = [
    { path: '', component: Login },//canActivate, RouteGuardService

    { path: 'login', component: Login},

    { path: 'welcome/:name', component: WelcomeComponent, canActivate : [RouteGuard] },

    {path: 'todos', component: TodoList, canActivate : [RouteGuard]},

    {path: 'logout', component: Logout, canActivate : [RouteGuard] },

    {path: 'todos/:id', component: TodoComponent, canActivate : [RouteGuard] },

    { path: '**', component: Error }
];

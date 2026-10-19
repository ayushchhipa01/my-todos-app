import { TodoData } from './../service/data/todo-data';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.html',
    styleUrls: ['./todo-list.css'],
    standalone: true,
    imports: [NgIf, NgFor, UpperCasePipe, DatePipe]
})
export class TodoList implements OnInit {

  todos: Todo[] = [];

  message: string = '';

  // = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  //   // {id : 1, description : },
  //   // {id : 2, description : ''},
  //   // {id : 3, description : 'Visit India'}
  // ]

  // todo = {
  //     id : 1,
  //     description: 'Learn to Dance'
  // }

  constructor(
    private todoService: TodoData,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retreiveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
        this.cdr.detectChanges(); // Force UI to refresh immediately after data is fetched
      }
    )
  }
}
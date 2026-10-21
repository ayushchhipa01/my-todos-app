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
        this.todos = response;
        this.cdr.detectChanges(); // Force UI to refresh immediately after data is fetched
      }
    )
  }

  deleteTodo(id: number) {
    console.log(`Delete todo ${id}`);
    this.todoService.deleteTodo("in28mintes", id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: number) {
    // console.log(`Update todo ${id}`);
    this.router.navigate(["todos", id]);
}

  addTodo() {
        this.router.navigate(["todos", -1]);
  }
}
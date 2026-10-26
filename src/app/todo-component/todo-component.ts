import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo-list/todo-list';
import { TodoData } from '../service/data/todo-data';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  imports: [FormsModule, DatePipe, NgIf],
  selector: 'app-todo-component',
  styleUrl: './todo-component.css',
  templateUrl: './todo-component.html',
})
export class TodoComponent {
  id: number = 0;
  todo: Todo = new Todo(this.id, "", false, new Date());

  constructor(
    private todoService: TodoData,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
  }



  ngOnInit() {
    this.refreshTodo();

  }

  refreshTodo() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, "", false, new Date());


    if (this.id != -1) {
      this.todoService.getTodo("in28minutes", this.id)
        .subscribe(
          data => {
            this.todo = data;
            this.cdr.detectChanges();
          }
        )
    }
  }

  saveTodo() {

    if (this.id == -1) {
      // Create new todo
      this.todoService.createTodo("in28minutes",this.todo)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(["todos"]);
        }
        )
        this.refreshTodo();
    }
    else {

      this.todoService.updateTodo("in28minutes", this.id, this.todo)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(["todos"]);
        }
        )
    }
  }

}

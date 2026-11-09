import { inject, Injectable } from '@angular/core';
import { Todo } from '../../todo-list/todo-list';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoData {

    private http = inject(HttpClient);

    retreiveAllTodos(username: string) {
        return this.http.get<Todo[]> (`${TODO_JPA_API_URL}/users/${username}/todos`);
    }

    deleteTodo(username: string, id: number) {
        return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
        }

    getTodo(username: string, id: number) {
        return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
        }

    updateTodo(username: string, id: number, todo: Todo) {
        return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo)
        }

    createTodo(username: string, todo: Todo) {
        return this.http.post(
            `${TODO_JPA_API_URL}/users/${username}/todos`
            , todo)
        }
}

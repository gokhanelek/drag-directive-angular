import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todoList = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Learn Angular',
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Learn Vue',
    },
    {
      id: 3,
      title: 'Todo 3',
      description: 'Learn React',
    },
  ];

  returnUpdatedList(data = []) {
    this.todoList = data;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  displayAll: boolean = false;
  txtItem: string = '';
  private name: String = 'Name';
  private todoItems: TodoItem[] = [
    {
      id: 1,
      description: 'Breakfast',
      action: false,
    },
    {
      id: 2,
      description: 'Sport',
      action: true,
    },
  ];
  getName() {
    return this.name;
  }

  setName(name: String) {
    this.name = name;
  }

  getTodoItems() {
    if (this.displayAll) return this.todoItems;
    return this.todoItems.filter((i) => !i.action);
  }
  setTodoItems(item: any) {
    if (item == '') {
      alert('Input Entry');
      return;
    }
    this.todoItems.push({
      id: Math.random(),
      description: item,
      action: false,
    });
  }
}

interface TodoItem {
  id: number;
  description: string;
  action: boolean;
}

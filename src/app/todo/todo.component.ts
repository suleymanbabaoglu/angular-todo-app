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
  private todoItems: TodoItem[] = [];

  /**
   *
   */
  constructor() {
    this.todoItems = this.getItemsFromLS();
  }

  getItemsFromLS() {
    let items: TodoItem[] = [];
    let value = localStorage.getItem('todoItems');

    if (value != null) items = JSON.parse(value);
    return items;
  }
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
  setTodoItems() {
    if (this.txtItem == '') {
      alert('Input Entry');
      return;
    }

    this.todoItems.push({
      id: Math.random(),
      description: this.txtItem,
      action: false,
    });
    localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
    this.txtItem = '';
  }

  getBtnClasses() {
    return {
      disabled: this.txtItem.length == 0,
      'btn-secondary': this.txtItem.length == 0,
      'btn-primary': this.txtItem.length > 0,
    };
  }
}

interface TodoItem {
  id: number;
  description: string;
  action: boolean;
}

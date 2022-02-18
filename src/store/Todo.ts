import { observable, action, makeObservable } from "mobx";
import { todoModel } from "../models/todoModel";

export default class Todo {
  todoList: todoModel[] = [];

  constructor() {
    makeObservable(this, {
      todoList: observable,
      handleAddTodo: action,
      handleComplete: action,
      handleDelete: action,
      handleEdit: action,
    });
  }

  handleAddTodo = (e: React.FormEvent, inputVal: string) => {
    e.preventDefault();

    this.todoList = [
      ...this.todoList,
      { id: Date.now(), title: inputVal, completed: false },
    ];
  };
  handleDelete = (id: number) => {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  };

  handleComplete = (id: number) => {
    this.todoList = this.todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };

  handleEdit = (e: React.FormEvent, id: number, editTodo: string) => {
    e.preventDefault();

    this.todoList = this.todoList.map((todo) =>
      todo.id === id ? { ...todo, title: editTodo } : todo
    );
  };
}

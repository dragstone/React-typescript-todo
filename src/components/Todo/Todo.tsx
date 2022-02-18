import React, { useState, useContext } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import { AppContext } from "../../store/AppProvider";
import { observer } from "mobx-react-lite";
import "./Todo.css";

const Todo: React.FC = observer(() => {
  const todoStore = useContext(AppContext);
  console.log(todoStore?.store.todo.todoList);
  const [inputVal, setInputVal] = useState<string>("");
  return (
    <div className="todo">
      <TodoInput inputVal={inputVal} setInputVal={setInputVal} />
      <TodoList />
    </div>
  );
});

export default Todo;

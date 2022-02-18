import React, { useContext } from "react";
import { todoModel } from "../../models/todoModel";
import TodoItem from "../TodoItem/TodoItem";
import { observer } from "mobx-react-lite";
import { AppContext } from "../../store/AppProvider";
import "./TodoList.css";

const TodoList: React.FC = observer(() => {
  const todoStore = useContext(AppContext);
  return (
    <div className="todos">
      {todoStore?.store.todo.todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
});
export default TodoList;

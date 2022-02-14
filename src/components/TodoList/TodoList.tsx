import React from "react";
import { todoModel } from "../../models/todoModel";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

type todoListProps = {
  todos: todoModel[];
  setTodos: React.Dispatch<React.SetStateAction<todoModel[]>>;
};

const TodoList: React.FC<todoListProps> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};
export default TodoList;

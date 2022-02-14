import React, { useState, useRef, useEffect } from "react";
import { todoModel } from "../../models/todoModel";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";
import "./TodoItem.css";

type todoItemProps = {
  todo: todoModel;
  todos: todoModel[];
  setTodos: React.Dispatch<React.SetStateAction<todoModel[]>>;
};

const TodoItem: React.FC<todoItemProps> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: editTodo } : todo
      )
    );
    setEdit(false);
  };

  return (
    <>
      <form className="form-section" onSubmit={(e) => handleEdit(e, todo.id)}>
        {edit ? (
          <input
            className="edit-input"
            value={editTodo}
            ref={inputRef}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : (
          <p className={`todo-text ${todo.completed ? "complete-todo" : ""}`}>
            {todo.title}
          </p>
        )}

        <div className="icon-section">
          <span className="icon" onClick={() => handleDelete(todo.id)}>
            <AiTwotoneDelete />
          </span>

          <span
            className="icon"
            onClick={() => {
              if (!edit && !todo.completed) {
                setEdit(true);
              }
            }}
          >
            <MdEdit />
          </span>
          <span className="icon" onClick={() => handleComplete(todo.id)}>
            <ImCheckmark />
          </span>
        </div>
      </form>
    </>
  );
};
export default TodoItem;

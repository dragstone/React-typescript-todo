import React, { useState, useRef, useEffect, useContext } from "react";
import { todoModel } from "../../models/todoModel";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";
import { observer } from "mobx-react-lite";
import { AppContext } from "../../store/AppProvider";
import "./TodoItem.css";

type todoItemProps = {
  todo: todoModel;
};

const TodoItem: React.FC<todoItemProps> = observer(({ todo }) => {
  const todoStore = useContext(AppContext);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <>
      <form
        className="form-section"
        onSubmit={(e) => {
          todoStore?.store.todo.handleEdit(e, todo.id, editTodo);
          setEdit(false);
        }}
      >
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
          <span
            className="icon"
            onClick={() => todoStore?.store.todo.handleDelete(todo.id)}
          >
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
          <span
            className="icon"
            onClick={() => todoStore?.store.todo.handleComplete(todo.id)}
          >
            <ImCheckmark />
          </span>
        </div>
      </form>
    </>
  );
});
export default TodoItem;

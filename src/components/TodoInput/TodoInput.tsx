import React from "react";
import "./TodoInput.css";

type todoInputProps = {
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
};

const TodoInput: React.FC<todoInputProps> = ({
  inputVal,
  setInputVal,
  handleAddTodo,
}) => {
  return (
    <>
      <form className="input-section" onSubmit={handleAddTodo}>
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          type="text"
        />
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default TodoInput;

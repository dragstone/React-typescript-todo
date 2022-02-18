import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { AppContext } from "../../store/AppProvider";
import "./TodoInput.css";

type todoInputProps = {
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
};

const TodoInput: React.FC<todoInputProps> = observer(
  ({ inputVal, setInputVal }) => {
    const todoStore = useContext(AppContext);
    return (
      <>
        <form
          className="input-section"
          onSubmit={(e) => todoStore?.store.todo.handleAddTodo(e, inputVal)}
        >
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            type="text"
          />
          <button>Add Todo</button>
        </form>
      </>
    );
  }
);

export default TodoInput;

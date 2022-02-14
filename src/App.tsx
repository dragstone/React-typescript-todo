import React, { useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import { todoModel } from "./models/todoModel";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

const App: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>("");
  const [todos, setTodos] = useState<todoModel[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal) {
      setTodos([
        ...todos,
        { id: Date.now(), title: inputVal, completed: false },
      ]);
      setInputVal("");
    }
  };

  return (
    <div className="app">
      <TodoInput
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleAddTodo={handleAddTodo}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

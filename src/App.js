import React, { useState, useEffect } from "react";
import Todoform from "./components/Todoform";
import Todolist from "./components/Todolist";
import "./app.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("react-todo-data"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-todo-data", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function removeTodo(id) {
    setTodos(
      todos.filter((td) => {
        return td.id !== id;
      })
    );
  }

  function completeTodo(id) {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id) {
          return {...todo, completed: !todo.completed};
        }
        return todo;
      })
    );
  }

  return (
    <div className="app">
      <h1 style={{ paddingTop: 180 }}>React todo list</h1>
      <Todoform addTodo={addTodo} />
      <Todolist todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} />
    </div>
  );
}

export default App;

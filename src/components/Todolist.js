import React from "react";
import Todo from "./Todo";

export default function Todolist({ todos, removeTodo, completeTodo }) {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />;
      })}
    </div>
  );
}

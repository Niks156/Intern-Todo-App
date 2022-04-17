import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todoform({ addTodo }) {
  const [newtodo, setnewtodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleInputTodo(e) {
    setnewtodo({ ...newtodo, task: e.target.value });
  }

  function handlechange(e) {
    e.preventDefault();
    if (newtodo.task.trim()) {
      addTodo({ ...newtodo, id: uuidv4() });
      // resetting the task input after submission
      setnewtodo({ ...newtodo, task: "" });
    }
  }

  return (
    <div style={{ marginTop: "5px", display: "flex" }}>
      <form onSubmit={(e) => handlechange(e)}>
        <input
          name="task"
          type="text"
          style={{padding: "5px 20px", width: "250px"}}
          value={newtodo.task}
          onChange={(e) => handleInputTodo(e)}
        />
        <button style={{marginLeft: "55px"}} className="btn-grad" onClick={() => handlechange}>
          Add Todo
        </button>
      </form>
    </div>
  );
}

import React from "react";

export default function Todo({ todo, removeTodo, completeTodo }) {
  function handlecompletetodo(id) {
    completeTodo(todo.id);
  }
  const styles = {
    flexi: {
      display: "flex",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    name: {
      marginRight: "35px",
      width: "100%",
    },
    btn: {
      padding: "10px 20px",
    },
  };
  return (
    <div style={styles.flexi}>
      <div
        style={{
          marginRight: "35px",
          width: "100%",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </div>
      <input
        type="checkbox"
        id={todo.id}
        name="todo"
        onClick={handlecompletetodo}
      />
      <button
        className="btn-grad"
        style={styles.btn}
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

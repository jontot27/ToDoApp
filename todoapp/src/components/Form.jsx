import { useState } from "react";
export default function Form({ toDos, setTodos }) {
  const [toDo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...toDos, toDo]);
    setTodo("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={toDo}
        type="text"
      ></input>
      <button type="submit">Add Task</button>
    </form>
  );
}

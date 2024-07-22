import { useState } from "react";
import TodoItems from "./TodoItems";

export default function Todo() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...toDos, toDo]);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={toDo}
          type="text"
        ></input>
        <button type="submit">Add Task</button>
      </form>
      {toDos.map((item) => (
        <TodoItems key={item} item={item} />
      ))}
    </div>
  );
}

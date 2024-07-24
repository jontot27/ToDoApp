import { useState } from "react";
import style from "./form.module.css";
export default function Form({ toDos, setTodos }) {
  const [toDo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...toDos, toDo]);
    setTodo("");
  }
  return (
    <form className={style.todoForm} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <input
          className={style.modernInput}
          onChange={(e) => setTodo(e.target.value)}
          value={toDo}
          type="text"
          placeholder="Type task here..."
        ></input>
        <button className={style.modernButton} type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}

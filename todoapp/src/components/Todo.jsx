import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [toDos, setTodos] = useState([]);
  return (
    <div>
      <Form toDos={toDos} setTodos={setTodos} />
      <TodoList toDos={toDos} />
    </div>
  );
}

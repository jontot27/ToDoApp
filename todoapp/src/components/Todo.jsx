import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [toDos, setTodos] = useState([]);
  const completedTodos = toDos.filter((toDo) => toDo.done).length;
  const totalTodos = toDos.length;
  return (
    <div>
      <Form toDos={toDos} setTodos={setTodos} />
      <TodoList toDos={toDos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}

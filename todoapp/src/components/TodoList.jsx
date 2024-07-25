import TodoItems from "./TodoItems";
import style from "./todolist.module.css";

export default function TodoList({ toDos, setTodos }) {
  return (
    <div className={style.list}>
      {toDos.map((item) => (
        <TodoItems key={item} item={item} toDos={toDos} setTodos={setTodos} />
      ))}
    </div>
  );
}

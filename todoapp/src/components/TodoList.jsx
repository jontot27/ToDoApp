import TodoItems from "./TodoItems";
import style from "./todolist.module.css";

export default function TodoList({ toDos }) {
  return (
    <div className={style.list}>
      {toDos.map((item) => (
        <TodoItems key={item} item={item} />
      ))}
    </div>
  );
}

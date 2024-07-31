import TodoItems from "./TodoItems";
import style from "./todolist.module.css";

export default function TodoList({ toDos, setTodos }) {
  const sortedTodos = toDos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={style.list}>
      {sortedTodos.map((item) => (
        <TodoItems
          key={item.name}
          item={item}
          toDos={toDos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

import style from "./todoitem.module.css";
export default function TodoItems({ item, toDos, setTodos }) {
  function handleDelete(item) {
    setTodos(toDos.filter((toDo) => toDo !== item));
  }
  function handleClick(name) {
    setTodos(
      toDos.map((toDo) =>
        toDo.name === name ? { ...toDo, done: !toDo.done } : toDo
      )
    );
  }
  const completed = item.done ? style.completed : "";
  return (
    <div className={style.item}>
      <div className={style.itemName}>
        <span className={completed} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={style.deleteButton}
          >
            {" "}
            x{" "}
          </button>
        </span>
      </div>
      <hr className={style.line} />
    </div>
  );
}

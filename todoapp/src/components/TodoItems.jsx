import style from "./todoitem.module.css";
export default function TodoItems({ item, toDos, setTodos }) {
  function handleDelete(item) {
    setTodos(toDos.filter((toDo) => toDo !== item));
  }
  return (
    <div className={style.item}>
      <div className={style.itemName}>
        {item}
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

import style from "./todoitem.module.css";
export default function TodoItems({ item }) {
  return (
    <div className={style.item}>
      <div className={style.itemName}>{item}</div>
      <hr className={style.line} />
    </div>
  );
}

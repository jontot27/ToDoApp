import style from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={style.footerCompletedTask}>
      <div>
        <h2 className={style.completedTaskText}>Completed Task:</h2>
        <h1 className={style.completedTaskNumber}>{completedTodos}</h1>
      </div>
      <div>
        <h2 className={style.completedTaskText}>Number of Tasks:</h2>
        <h1 className={style.completedTaskNumber}>{totalTodos}</h1>
      </div>
    </div>
  );
}

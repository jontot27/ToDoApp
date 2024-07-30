import style from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div>
      <div className={style.footerCompletedTask}>
        <span>
          <h2 className={style.completedTaskText}>Completed Task:</h2>
          <h1 className={style.completedTaskNumber}>{completedTodos}</h1>
        </span>
      </div>
      <div className={style.footerTasksNumber}>
        <span>
          <h2 className={style.completedTaskText}>Number of Tasks:</h2>
          <h1 className={style.completedTaskNumber}>{totalTodos}</h1>
        </span>
      </div>
    </div>
  );
}

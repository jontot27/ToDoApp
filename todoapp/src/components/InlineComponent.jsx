// const header = { color: "blue", fontSize: "140px" };
// import "../css/style.css";

import style from "./inlinecomponent.module.css";

export default function InlineComponent() {
  return (
    <div>
      <h1 className={style.header}>Inline Component</h1>
    </div>
  );
}

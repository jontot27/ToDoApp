import TodoItems from "./TodoItems";

export default function TodoList({ toDos }) {
  return (
    <div>
      {toDos.map((item) => (
        <TodoItems key={item} item={item} />
      ))}
    </div>
  );
}

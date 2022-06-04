import "./ToDoList.css";
import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
  const onEditHandler = (todoContent) => {
    props.onEdit(todoContent);
  };

  console.log(props.todos);

  if (props.todos.length === 0) {
    console.log(props.todos.lenght);
    return <h2 className="todo-list__fallback">What to do?</h2>;
  }

  return (
    <ul className="todo-list">
      {props.todos.map((element) => (
        <ToDoItem key={element.id} item={element} onEdit={onEditHandler} />
      ))}
    </ul>
  );
}

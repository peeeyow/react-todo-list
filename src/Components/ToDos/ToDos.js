import "./ToDos.css";
import ToDoList from "./ToDoList";

export default function ToDo(props) {
  const onEditHandler = (todoContent) => {
    props.onEdit(todoContent);
  };

  return (
    <div className="todo">
      <ToDoList todos={props.todos} onEdit={onEditHandler} />
    </div>
  );
}

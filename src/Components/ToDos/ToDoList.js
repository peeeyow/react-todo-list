import "./ToDoList.css";
import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
  const onEditHandler = (todoContent) => {
    props.onEdit(todoContent);
  };

  const onDeleteHandler = (todoID) => {
    props.onDelete(todoID);
  };

  if (props.todos.length === 0) {
    return <h2 className="todo-list__fallback">What to do?</h2>;
  }

  return (
    <ul className="todo-list">
      {props.todos.map((element) => (
        <ToDoItem
          key={element.id}
          item={element}
          onEdit={onEditHandler}
          onDelete={onDeleteHandler}
        />
      ))}
    </ul>
  );
}

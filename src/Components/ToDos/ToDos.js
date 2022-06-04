import "./ToDos.css";
import NewToDo from "../NewToDo/NewToDo";
import ToDoList from "./ToDoList";

export default function ToDo(props) {
  const onEditHandler = (todoContent) => {
    props.onEditToDo(todoContent);
  };

  const onAddToDoHandler = (todoContent) => {
    props.onAddToDo(todoContent);
  };
  const onDeleteHandler = (todoID) => {
    props.onDeleteToDo(todoID);
  };

  return (
    <div className="todo">
      <NewToDo onAddToDo={onAddToDoHandler} />
      <ToDoList
        todos={props.todos}
        onEdit={onEditHandler}
        onDelete={onDeleteHandler}
      />
    </div>
  );
}

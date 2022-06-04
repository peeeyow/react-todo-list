import "./ToDoItem.css";
import Card from "../UI/Card";
import ToDoItemView from "./ToDoItemView";
import ToDoForm from "../NewToDo/ToDoForm";
import { useState } from "react";

export default function ToDoItem(props) {
  const [done, setDone] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const onTickHandler = (event) => {
    if (event.target.checked) {
      setDone(true);
    } else {
      setDone(false);
    }
  };
  const onClickEditHandler = () => {
    setEditMode(true);
  };
  const onClickDeleteHandler = () => {
    props.onDelete(props.item.id);
  };
  const onCancelHandler = () => {
    setEditMode(false);
  };
  const onSaveHandler = (todoContent) => {
    setEditMode(false);
    props.onEdit({ ...props.item, name: todoContent });
  };
  const view = (
    <ToDoItemView
      name={props.item.name}
      done={done}
      onTick={onTickHandler}
      onClickEdit={onClickEditHandler}
      oncClickDelete={onClickDeleteHandler}
    />
  );
  const edit = (
    <ToDoForm
      name={props.item.name}
      onCancel={onCancelHandler}
      onSave={onSaveHandler}
    />
  );
  return (
    <li className="todo-item">
      <Card className="todo-item__content">{editMode ? edit : view}</Card>
    </li>
  );
}

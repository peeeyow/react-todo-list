import { useState } from "react";
import uuid from "react-uuid";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ToDoForm from "./ToDoForm";

export default function NewToDo(props) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const onCancelHandler = () => {
    setIsFormOpen(false);
  };
  const onSaveHandler = (todoContent) => {
    setIsFormOpen(false);
    props.onAddToDo({ id: uuid(), name: todoContent });
  };
  const onClickAddNewToDo = () => {
    setIsFormOpen(true);
  };

  const formOpen = (
    <ToDoForm name="" onCancel={onCancelHandler} onSave={onSaveHandler} />
  );

  const formClose = <Button onClick={onClickAddNewToDo}>Add New ToDo</Button>;

  return <Card>{isFormOpen ? formOpen : formClose}</Card>;
}

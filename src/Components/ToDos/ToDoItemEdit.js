import { useState } from "react";
import Button from "../UI/Button";

export default function ToDoItemEdit(props) {
  const [todoContent, setToDoContent] = useState(props.name);

  const onChangeHandler = (event) => {
    setToDoContent(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSave(todoContent);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="todo">Todo: </label>
      <input
        type="text"
        minLength="1"
        value={todoContent}
        id="todo"
        onChange={onChangeHandler}
      />
      <Button onClick={props.onCancel} type="button">
        Cancel
      </Button>
      <Button type="submit">Save</Button>
    </form>
  );
}

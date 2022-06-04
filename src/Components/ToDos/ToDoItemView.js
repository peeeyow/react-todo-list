import Button from "../UI/Button";

export default function ToDoItemView(props) {
  return (
    <>
      <input type="checkbox" onChange={props.onTick} />
      <span>{props.done ? <s>{props.name}</s> : props.name}</span>
      <Button onClick={props.onClickDelete}>Delete</Button>
      <Button onClick={props.onClickEdit}>Edit</Button>
    </>
  );
}

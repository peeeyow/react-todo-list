export default function ToDoItemView(props) {
  return <span>{props.done ? <s>{props.name}</s> : props.name}</span>;
}

import "./ToDoItem.css";
import Card from "../UI/Card";
import ToDoItemView from "./ToDoItemView";

export default function ToDoItem(props) {
  return (
    <li className="todo-item">
      <Card className="todo-item__content">
        <ToDoItemView name={props.item.name} done={false} />
      </Card>
    </li>
  );
}

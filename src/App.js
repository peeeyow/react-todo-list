import "./App.css";
import ToDos from "./Components/ToDos/ToDos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const onEditHandler = (newToDo) => {
    setTodos((previousToDos) => {
      for (const todo of previousToDos) {
        if (todo.id === newToDo.id) {
          todo.name = newToDo.name;
        }
      }
      return todos;
    });
  };

  return (
    <div className="App">
      <ToDos todos={todos} onEdit={onEditHandler} />
    </div>
  );
}

export default App;

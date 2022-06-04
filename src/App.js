import "./App.css";
import ToDos from "./Components/ToDos/ToDos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const onEditToDoHandler = (newToDo) => {
    setTodos((previousToDos) => {
      for (const todo of previousToDos) {
        if (todo.id === newToDo.id) {
          todo.name = newToDo.name;
        }
      }
      return todos;
    });
  };
  const onAddToDoHandler = (newToDo) => {
    setTodos((previousToDos) => [newToDo, ...previousToDos]);
  };
  const onDeleteToDoHandler = (todoID) => {
    setTodos((previousToDos) =>
      previousToDos.filter((todo) => todo.id !== todoID)
    );
  };

  return (
    <div className="App">
      <ToDos
        todos={todos}
        onEditToDo={onEditToDoHandler}
        onAddToDo={onAddToDoHandler}
        onDeleteToDo={onDeleteToDoHandler}
      />
    </div>
  );
}

export default App;

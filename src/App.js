import "./App.css";
import uuid from "react-uuid";
import ToDo from "./Components/ToDos/ToDo";
import { useState } from "react";

function App() {
  const INITIAL_TODOS = [
    {
      id: uuid(),
      name: "Study react",
    },
  ];

  const [todos, setTodos] = useState(INITIAL_TODOS);

  return (
    <div className="App">
      <ToDo todos={todos} />
    </div>
  );
}

export default App;

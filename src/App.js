import { useState } from "react";
import { Input } from "./Input";
import { List } from "./List";

function App() {
  const [todos, setTodos] = useState([]);

  const onSubmit = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <List todos={todos} />
      <Input onSubmit={onSubmit} />
    </div>
  );
}

export default App;

// 1) Input box
// 2) Todo List
// 3) Todo - Completed
// 4) Todo - Delete

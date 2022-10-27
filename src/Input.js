import { useState } from "react";

export const Input = (props) => {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        value={todo}
      />
      <button
        onClick={() => {
          props.onSubmit(todo);
          setTodo("");
        }}
      >
        Submit
      </button>
    </div>
  );
};

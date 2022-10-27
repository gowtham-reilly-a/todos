export const List = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <li key={todo}>{todo}</li>;
      })}
    </ul>
  );
};

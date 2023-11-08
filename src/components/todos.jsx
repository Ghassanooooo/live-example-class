import useTodosContext from "../hooks/use-todos-context";

const Todos = () => {
  const { todoList, handlerDelete } = useTodosContext();

  return (
    <div>
      <h1>Todos</h1>
      <ul className="TodosContainer">
        {todoList.map((todo, index) => (
          <li key={index} className="Todo">
            <h3>{todo.name}</h3>
            <p>creator: {todo.creator}</p>
            <button onClick={() => handlerDelete(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

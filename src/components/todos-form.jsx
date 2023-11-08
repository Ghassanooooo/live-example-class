import useTodosContext from "../hooks/use-todos-context";

const TodosForm = () => {
  const { handlerAdd } = useTodosContext();

  return (
    <form onSubmit={handlerAdd}>
      <h1>Todos Form</h1>
      <input type="text" name="todoName" placeholder="Add new todo list" />
      <input type="text" name="creatorName" placeholder="Creator name" />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodosForm;

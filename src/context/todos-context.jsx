import { createContext, useReducer } from "react";
import todosReducer from "../store";
import { ADD, DELETE } from "../store/action-types";

const TodosContext = createContext();

export const initialState = [
  {
    name: "Add a task item",
    creator: "Admin",
  },
];

const TodosProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(todosReducer, initialState);

  const handlerAdd = (e) => {
    e.preventDefault();

    const payload = {
      name: e.target.todoName.value,
      creator: e.target.creatorName.value,
    };

    dispatch({ type: ADD, payload });
    e.target.reset();
  };

  const handlerDelete = (taskIndex) => {
    dispatch({ type: DELETE, payload: { taskIndex } });
  };

  return (
    <TodosContext.Provider value={{ todoList, handlerAdd, handlerDelete }}>
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };

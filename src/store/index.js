import { ADD, DELETE } from "./action-types";

function todosReducer(state, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DELETE:
      return state.filter((_, i) => action.payload.taskIndex !== i);
    default:
      return state;
  }
}

export default todosReducer;

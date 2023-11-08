import "./App.css";
import Todos from "./components/todos";
import TodosForm from "./components/Todos-form";

function App() {
  return (
    <div className="App">
      <TodosForm />
      <Todos />
    </div>
  );
}

export default App;

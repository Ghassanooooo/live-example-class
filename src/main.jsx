import App from "./App";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { TodosProvider } from "./context/todos-context";

const bootstrap = () =>
  ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
      <TodosProvider>
        <App />
      </TodosProvider>
    </StrictMode>
  );

bootstrap();

import React from "react";
import "./App.css";
import Form from "./components/form/form.component";
import Todos from "./components/todos/todos.component";
import ContextController from "./ContextController";

function App() {
  return (
    <div className="App">
      <ContextController>
        <Form />
        <Todos />
      </ContextController>
    </div>
  );
}

export default App;

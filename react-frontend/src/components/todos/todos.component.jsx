import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Todo from "../todo/todo.component";
import { Context } from "../../ContextController"

function Todos() {
  
  const [state, setState] = useContext(Context);

  useEffect(() => {
    axios
      .get(`/api/todos`)
      .then(res => {
        //console.log(res.data)
        setState({ todos: res.data });
      })
      .catch(err => console.log(err));
  });

  return (
    <div className="container mb-3">
      {state.todos.map(todo => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </div>
  );
}

export default Todos;

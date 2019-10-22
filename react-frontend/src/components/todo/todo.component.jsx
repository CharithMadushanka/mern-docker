import React, { useContext } from "react";
import axios from "axios";
import { Context } from "../../ContextController";

function Todo({ todo }) {
  const [state, setState] = useContext(Context);

  const removeTodo = _id => {
    axios.delete(`/api/todos/` + _id);
  };

  const completeTodo = _id => {
    const updatedTodo = { completed: !todo.completed };
    axios.patch(`/api/todos/` + _id, updatedTodo);
  };

  const getStyle = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none"
    };
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              <span
                role="button" style={{cursor: 'pointer'}}
                className="far fa-check-square float-left ml-3"
                onClick={() => completeTodo(todo._id)}
              ></span>
              
              <i style={getStyle()}>{todo.description}</i>
              
              <span
                role="button" style={{cursor: 'pointer'}}
                className="far fa-trash-alt float-right mr-3"
                onClick={() => removeTodo(todo._id)}
              ></span>
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title" style={getStyle()}>
                {todo.date}
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Todo;

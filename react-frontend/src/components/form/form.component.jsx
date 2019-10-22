import React, { useContext } from "react";
import axios from "axios";
import { Context } from "../../ContextController";

function Form() {
  const [state, setState] = useContext(Context);

  const onSubmit = e => {
    e.preventDefault();
    const newTodo = {
      description: e.target.elements.description.value,
      date: e.target.elements.date.value
    };
    // console.log(newTodo)
    axios.post(`/api/todos`, newTodo);
  };

  return (
    <div className="container mt-3">
      <div className="card card-body mb-4 p-4">
        <h1 className="display-4 text-center">Todo App</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              required
              style={{borderRadius : '0%'}}
              type="text"
              className="form-control form-control-md"
              name="description"
              placeholder="Description..."
            />
          </div>
          <div className="form-group">
            <input
              required
              style={{borderRadius : '0%'}}
              type="date"
              className="form-control form-control-md"
              name="date"
            />
          </div>
          <button style={{borderRadius : '0%'}} className="btn btn-primary btn-md btn-block mb-5">
            New Todo
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;

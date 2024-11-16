import React, { useRef } from "react";
import toast from "react-hot-toast";

const AddTodo = ({ setTodos, todos }) => {
  const inpref = useRef();

  const addNewTodo = (e) => {
    e.preventDefault();
    const date = new Date();
    const data = {
      id: date.getTime(),
      todo: inpref.current.value,
      isDone: false,
    };
    if (inpref.current.value) {
      setTodos([data, ...todos]);
      toast.success("Yeni todo elave edildi");
      inpref.current.value = "";
      inpref.current.focus();
    } else {
      toast.error("todo bos olmamalidir");
    }
  };
  return (
    <div className="addTodo bg-secondary">
      <div className="col-6">
        <form onSubmit={addNewTodo}>
          <input
            className="form-control p-3"
            type="text"
            placeholder="Todo"
            ref={inpref}
          />
          <input
            className="form-control p-3 mt-3"
            type="submit"
            value="Add Todo"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTodo;

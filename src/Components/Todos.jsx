import React from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Todos = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    const isAgree = confirm("eminsen?");

    if (isAgree) {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
      toast.success("Todo ugurla silindi");
    }
  };

  const setIsDone = (e, id) => {
    const _todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = e.target.checked;
      }
      return todo;
    });
    setTodos(_todos);
  };
  return (
    <div className="todos">
      <table className="table table-light">
        <thead>
          <tr>
            <th className="py-3">Todo</th>
            <th className="py-3">Completed</th>
            <th className="py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({ id, todo, isDone }) => {
            return (
              <tr
                key={id}
                className={isDone ? "table-success" : "table-danger"}
              >
                <td className="py-3">{todo}</td>
                <td className="py-3">
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={(e) => setIsDone(e, id)}
                  />
                </td>
                <td className="py-3">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTodo(id)}
                  >
                    <FaTrash />
                  </button>
                  <button className="btn btn-warning btn-sm text-light ms-2">
                    <MdEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;

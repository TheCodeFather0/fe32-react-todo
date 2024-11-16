import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Todos = ({ todos }) => {
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
                  <input type="checkbox" checked={isDone} />
                </td>
                <td className="py-3">
                  <button className="btn btn-danger btn-sm">
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

import React from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

const Right = ({ activePage, todos, setTodos }) => {
  return (
    <div className="right">
      {activePage === 0 ? (
        <Todos todos={todos} setTodos={setTodos} />
      ) : (
        <AddTodo setTodos={setTodos} todos={todos} />
      )}
    </div>
  );
};

export default Right;

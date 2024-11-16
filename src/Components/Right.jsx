import React from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

const Right = ({ activePage }) => {
  return (
    <div className="right">{activePage === 0 ? <Todos /> : <AddTodo />}</div>
  );
};

export default Right;

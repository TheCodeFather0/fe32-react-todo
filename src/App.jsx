import React from "react";

const App = () => {
  return (
    <div className="d-flex">
      <div className="left bg-success">
        <button className="btn btn-outline-light">Todos</button>
        <button className="btn btn-outline-light">Add Todo</button>
      </div>
      <div className="right">
        <div className="addTodo">addTodo</div>

        <div className="todos">todos</div>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { Left } from "./Components/Left";
import Right from "./Components/Right";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 0, todo: "Ders oxu", isDone: false },
    { id: 1, todo: "Yazi yaz", isDone: false },
    { id: 2, todo: "Ders oxu", isDone: false },
    { id: 3, todo: "Ders oxu", isDone: false },
  ]);
  const [activePage, setActivePage] = useState(0);
  return (
    <div className="d-flex">
      <Toaster position="top-right" reverseOrder={false} />
      <Left activePage={activePage} setActivePage={setActivePage} />
      <Right activePage={activePage} todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

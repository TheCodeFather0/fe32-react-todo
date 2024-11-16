import React, { useState } from "react";
import { Left } from "./Components/Left";
import Right from "./Components/Right";

const App = () => {
  const [activePage, setActivePage] = useState(0);
  return (
    <div className="d-flex">
      <Left activePage={activePage} setActivePage={setActivePage} />
      <Right activePage={activePage} />
    </div>
  );
};

export default App;

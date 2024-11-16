import React from "react";

export const Left = ({ setActivePage, activePage }) => {
  const buttons = [
    { id: 0, title: "Todos" },
    { id: 1, title: "Add Todo" },
  ];
  return (
    <div className="left bg-success">
      {buttons.map(({ id, title }) => {
        return (
          <button
            key={id}
            className={
              id === activePage ? "btn btn-light" : "btn btn-outline-light"
            }
            onClick={() => setActivePage(id)}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};

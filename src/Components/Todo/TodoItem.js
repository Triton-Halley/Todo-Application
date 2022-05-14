import React from "react";

import "./TodoItem.css";
import logo from "../../Images/AddIcon-500px.png";

const TodoItem = function (prop) {
  const onCheckedHandler = function (e) {
    // console.log();
    e.target.previousSibling.classList.toggle("taskFinished");
  };
  return (
    <div className="TodoItem">
      {/* name */}
      <div>{prop.name}</div>
      <input className="checkbox" onClick={onCheckedHandler} type="checkbox" />
    </div>
  );
};
export default TodoItem;

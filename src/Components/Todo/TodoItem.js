import React from "react";

import "./TodoItem.css";
import logo from "../../Images/AddIcon-500px.png";

const TodoItem = function (prop) {
  return (
    <div className="TodoItem">
      {/* name */}
      <div>Finsih React</div>
      <input className="checkbox" type="checkbox" />
    </div>
  );
};
export default TodoItem;

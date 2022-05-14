import React from "react";

import "./AddTodo.css";
import AddIcon from "../../Images/AddIcon-500px.png";
const AddTodo = function () {
  return (
    <div className="AddTodoContainer">
      <button className="Addbutton">
        <img src={AddIcon} alt="AddTodo" width={100} />
      </button>
    </div>
  );
};

export default AddTodo;

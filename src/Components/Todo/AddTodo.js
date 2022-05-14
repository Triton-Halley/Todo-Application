import React from "react";

import "./AddTodo.css";
import AddIcon from "../../Images/AddIcon-500px.png";
const AddTodo = function () {
  const AddTodoHandler = function (e) {
    document.querySelector(".Form-container").classList.remove("hidden");
    document.querySelector(".Form-container").classList.add("show");
  };
  return (
    <div className="AddTodoContainer">
      <button onClick={AddTodoHandler} className="Addbutton">
        <img src={AddIcon} alt="AddTodo" width={100} />
      </button>
    </div>
  );
};

export default AddTodo;

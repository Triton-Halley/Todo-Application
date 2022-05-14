import React, { useState } from "react";

import "./TodoForm.css";

const TodoForm = function (prop) {
  const [TaskName, setTaskName] = useState("");

  const clearInput = function () {
    setTaskName("");
  };
  const onchangeHandler = function (e) {
    setTaskName(e.target.value);
  };

  const FormHandler = function (e) {
    e.preventDefault();
    console.log(e.target);
    // console.log();
    const clickedBtn = document.activeElement.textContent;
    console.log(prop);
    console.log(clickedBtn === "Ok");
    if (clickedBtn === "Ok") {
      prop.func(null, {
        name: document.querySelector(".task-input").value,
      });
      clearInput();
      hideForm();
    }
    if (clickedBtn === "Cancel") {
      clearInput();
      hideForm();
    }
  };
  const hideForm = function () {
    document.querySelector(".Form-container").classList.remove("show");
    document.querySelector(".Form-container").classList.add("hidden");
  };
  return (
    // hidden
    <form onSubmit={FormHandler} className="Form-container ">
      <div>
        <label>Task Name</label>
        <br />
        <input
          className="task-input"
          type="text"
          value={TaskName}
          onChange={onchangeHandler}
        />
      </div>
      <div className="btns">
        <button>Cancel</button>
        <button>Ok</button>
      </div>
    </form>
  );
};

export default TodoForm;

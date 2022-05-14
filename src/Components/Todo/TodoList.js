import React from "react";

import "./TodoList.css";
import TodoItem from "./TodoItem";
const TodoList = function () {
  return (
    <div className="TodoList">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;

// name(str) done(true/false)

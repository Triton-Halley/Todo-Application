import React from "react";

import "./Todo.css";
import TodoDate from "./TodoDate";
import TodoList from "./TodoList";

const Todo = function () {
  return (
    <div className="Todo-container">
      <TodoDate />
      <TodoList />
    </div>
  );
};
export default Todo;

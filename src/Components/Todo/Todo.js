import React from "react";

import "./Todo.css";
import TodoDate from "./TodoDate";
import TodoList from "./TodoList";

const Todo = function (prop) {
  return (
    <div className="Todo-container">
      <TodoDate />
      <TodoList addTodo={prop.func} />
    </div>
  );
};
export default Todo;

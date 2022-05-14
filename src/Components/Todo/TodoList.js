import React, { useState } from "react";

import "./TodoList.css";
import TodoItem from "./TodoItem";
const TodoList = function (prop) {
  const [listOfItem, setList] = useState([]);

  const addItem = function (item) {
    setList((prevDate) => {
      return [item, ...prevDate];
    });
    // console.log(item);
  };
  prop.addTodo(addItem);
  return (
    <div className="TodoList">
      {listOfItem.map((item, i) => (
        <TodoItem key={i} name={item.name} />
      ))}
    </div>
  );
};

export default TodoList;

// name(str) done(true/false)

import React, { useState } from "react";

import Welcome from "./Components/Welcome Message/Welcome";
import Container from "./Components/Container/Container";
import Todo from "./Components/Todo/Todo";
import AddTodo from "./Components/Todo/AddTodo";
import TodoForm from "./Components/Todo/Todo Form";
function App() {
  let func;
  const OnAddTodo = function (item = null, formData = null) {
    if (item) {
      func = item;
    }
    if (formData) {
      func(formData);
    }
  };

  return (
    <Container>
      <Welcome />
      <div>
        <TodoForm func={OnAddTodo} />
      </div>
      <div>
        <Todo func={OnAddTodo} />
      </div>

      <AddTodo />
    </Container>
  );
}

export default App;

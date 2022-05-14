import React from "react";

import Welcome from "./Components/Welcome Message/Welcome";
import Container from "./Components/Container/Container";
import Todo from "./Components/Todo/Todo";
import AddTodo from "./Components/Todo/AddTodo";
function App() {
  return (
    <Container>
      <Welcome />
      <div>
        <Todo />
      </div>

      <AddTodo />
    </Container>
  );
}

export default App;

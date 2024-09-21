import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";

import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />

      <div className="container text-center">
        <AddTodo />

        <TodoItem content="Buy Milk" date="4/10/2024" />

        <TodoItem content="Go to college" date="4/10/2024" />
      </div>
    </center>
  );
}

export default App;

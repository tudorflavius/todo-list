import React, { useState } from "react";
import "./Card.css";
import Input from "../Input/Input";
import Todo from "../Todo/Todo";

function Card() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  console.log(todos);

  return (
    <div className="card">
      <h1>Get this done!</h1>
      <Input
        placeholderText="what is the task?"
        buttonText="Add task"
        addTodo={addTodo}
      />
      {todos.map((todo, index) => (
        <Todo todoText={todo} key={index} />
      ))}
    </div>
  );
}

export default Card;

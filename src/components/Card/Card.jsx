import React, { useState } from "react";
import "./Card.css";
import Input from "../Input/Input";
import Todo from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";
import EditInput from "../EditInput/EditInput";

function Card() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), todoDesc: todo, isEditing: false }]);
  };
  console.log(todos);
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodoMode = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="card">
      <h1>Get this done!</h1>
      <Input
        placeholderText="what is the task?"
        buttonText="Add task"
        addTodo={addTodo}
      />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditInput
            placeholderText="Edit your task?"
            buttonText="Edit Task"
            addTodo={addTodo}
            key={index}
          />
        ) : (
          <Todo
            todoText={todo.todoDesc}
            key={index}
            deleteTask={deleteTodo}
            id={todo.id}
            editTask={editTodoMode}
          />
        )
      )}
    </div>
  );
}

export default Card;

import React from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo(props) {
  return (
    <div className="todo">
      <p>{props.todoText}</p>
      <div className="icon">
        <FontAwesomeIcon icon={faPenToSquare} style={{ color: "white" }} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}

export default Todo;

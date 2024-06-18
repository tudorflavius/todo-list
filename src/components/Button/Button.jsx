// import React, { useState } from "react";
import "./Button.css";

function Button(props) {
  // const [nr, setNr] = useState(0);

  // //   const state = useState(0);
  // // const nr = state(0)
  // // const setNr = state
  // const handleClick = () => {
  //   // let nr = 0;
  //   console.log();
  // };

  return (
    <>
      <button className="btn" onClick={props.clickFunction}>
        {" "}
        {props.buttonText}
      </button>
      ;
    </>
  );
}

export default Button;

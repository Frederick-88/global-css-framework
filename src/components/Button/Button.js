import React from "react";
import "./Button.scss";

const Button = (props) => {
  // props.children = <slot> at vue
  return (
    <button
      className={`btn ${props.color}`}
      onClick={() => {
        props.click();
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;

import React from "react";
import "./Input.scss";

const Input = (props) => {
  // props.children = <slot> at vue
  return (
    <input
      className="input-field"
      placeholder={props.placeholder ? props.placeholder : ""}
      disabled={props.disabled}
    />
  );
};

export default Input;

import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <a className="btn" href={"#" + props.id} style={{ display: props.display }}>
      {props.name}
    </a>
  );
};

export default Button;

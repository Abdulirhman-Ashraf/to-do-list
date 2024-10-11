import React from "react";
import "./Header.css";
import Button from "../Button/Button";
const Header = (props) => {
  return (
    <div className="header  container w-75" id={props.id}>
      <div className="row d-flex align-items-center">
        <div className="col col-lg-6 col-md-6 order-md-1 order-2 col-sm-11 ">
          <h2>{props.h2}</h2>
          <p>{props.p}</p>
          <Button name={props.btn1} id="about" display={props.display} />
          <Button name={props.btn2} id="about" display={props.display} />
        </div>
        <div className="col  col-lg-6 col-md-6 order-md-2 order-1 col-sm-11 mb-2 ">
          <img className="img-fluid" src={props.img} />
        </div>
      </div>
    </div>
  );
};

export default Header;

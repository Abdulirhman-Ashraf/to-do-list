import React from "react";
import "./About.css";
const About = (props) => {
  return (
    <div className="about  container w-75" id={props.id}>
      <div className="row d-flex align-items-center">
        <div className="col col-md-6 col-sm-12">
          <img src={props.img} />
        </div>
        <div className="col col-md-6 col-sm-12">
          <h2 className="w-50">{props.h2}</h2>
          <p>{props.p}</p>
        </div>
      </div>
    </div>
  );
};

export default About;

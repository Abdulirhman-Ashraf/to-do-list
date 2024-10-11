import React from "react";
import logo from "../../image/logo.svg";
import Button from "../Button/Button";
import "./nav.css";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary w-75 m-auto">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#about">
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#mission">
                mission
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#product">
                product
              </a>
            </li>
            <li className="nav-item">
              <Button name="contact" id="contact" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

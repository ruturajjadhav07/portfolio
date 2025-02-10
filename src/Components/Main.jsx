import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Main = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top px-3">
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
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav gap-4">
          <li className="nav-item">
            <a className="nav-link text-white fs-5 fw-bold" href="#about">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fs-5 fw-bold" href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Main;

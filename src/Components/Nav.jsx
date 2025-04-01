import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Main from "./Main";

const Nav = () => {
  return (
    <div style={{ backgroundColor: "#161b22", minHeight: "100vh" }}>
      <div className="container col-md-8">
        <nav
          className="navbar navbar-expand-lg sticky-top"
          style={{ backgroundColor: "#161b22" }}
          // #24292e
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a className="nav-link active text-white" href="#main">
                  Home
                </a>
                <a className="nav-link active text-white" href="#projects">
                  Project
                </a>
                <a
                  className="nav-link active text-white"
                  href="https://drive.google.com/file/d/1I_4B-4SaQIVGu6xGRDg9ifB5ntJ9HoKu/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </nav>
        <hr
          className="text-white m-0"
          style={{ border: "1px solid #444c56" }}
        />

        <Main />
      </div>
    </div>
  );
};

export default Nav;

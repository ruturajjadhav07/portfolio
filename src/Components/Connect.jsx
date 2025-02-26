import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const Connect = () => {
  return (
    <div className="container text-center mt-2 mb-2"  style={{ fontFamily: "monospace" }}>
      <h5 className="text-success fw-bold ">🌍 Connect with Me</h5>
      <div className="d-flex justify-content-center gap-3 mt-2">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ruturaj-jadhav-0a250821b/"
          className="text-white fs-4"
        >
          <i className="bi bi-linkedin"></i>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/ruturajjadhav07"
          className="text-white fs-4"
        >
          <i className="bi bi-github"></i>
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/spoiidermon"
          className="text-white fs-4"
        >
          <i className="bi bi-twitter-x"></i>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/ruturajj_07/"
          className="text-white fs-4"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Connect;

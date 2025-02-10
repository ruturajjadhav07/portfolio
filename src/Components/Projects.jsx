import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Project = () => {
  return (
    <div
      className="container col-md-8 mb-5 text-white"
      style={{ fontFamily: "'Caveat', cursive" }}
    >
      <h3 className="text-success mt-4 fw-bold">🚀 My Projects</h3>

      <div className="row mt-3">
        {/* Full-Stack Social Media App */}
        <div className="d-flex mb-4" style={{gap:"30px"}}>
          <div className="col">
            <div className="card h-100"> 
              <img
                src=""
                className="card-img-top rounded-top-4"
                alt="Social Media App"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary fw-bold">
                  🌐 Social Media App
                </h5>
                <p className="card-text text-white">
                  A full-stack social media platform with
                  <strong>login, posts, likes, and comments</strong>. Built
                  using
                  <strong> Spring Boot & React</strong>, featuring
                  <strong>CRUD operations</strong> for users and posts.
                </p>
                <a href="https://github.com/ruturajjadhav07/PhotoShare" className="btn btn-outline-primary mt-auto fw-bold">
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* React Project Collection */}
          <div className="col">
            <div className=" card h-100">
              <img
                src=""
                className="card-img-top rounded-top-4"
                alt="React Projects"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-danger fw-bold">
                  ⚛️ React Project Collection
                </h5>
                <p className="card-text text-white ">
                  Explore a variety of **React projects** covering **state
                  management, routing, API handling, and UI components**. Ideal
                  for both beginners and advanced developers.
                </p>
                <a href="https://github.com/ruturajjadhav07/React-Projects" className="btn btn-outline-danger mt-auto fw-bold">
                  Explore Projects
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex mb-4" style={{gap:"30px"}}>
          {/* Mechanic Finder */}
          <div className="col">
            <div className="card h-100 ">
              <img
                src=""
                className="card-img-top rounded-top-4"
                alt="Mechanic Finder"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-success fw-bold">
                  🔧 Mechanic Finder
                </h5>
                <p className="card-text text-white">
                  A <strong>Java-based web app</strong> to connect users with
                  mechanics. Includes
                  <strong>service requests, reviews, and dashboards</strong>
                  for Users, Mechanics, and Admins.
                </p>
                <a href="https://github.com/ruturajjadhav07/E-Mechanic-Finder-" className="btn btn-outline-success mt-auto fw-bold">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Custom Project */}
          <div className="col">
            <div className="card h-100 ">
              <img
                src=""
                className="card-img-top rounded-top-4"
                alt="Custom Project"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-warning fw-bold">
                  ✨ Custom Project
                </h5>
                <p className="card-text text-muted">
                  An exciting new project under development! Stay tuned for
                  updates.
                </p>
                <a href="#" className="btn btn-outline-warning mt-auto fw-bold">
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Useful Repositories Section */}
      <h3 className="text-success mt-5 text-center fw-bold">
        📚 Useful Repositories
      </h3>

      <div className="row mt-3">
        <div className="d-flex mb-4" style={{gap:"30px"}}>
          {/* Java Repository */}
          <div className="col">
            <div className="card h-100">
              <img
                src=""
                className="card-img-top rounded-top-4"
                alt="Java Repo"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary fw-bold">
                  ☕ Java Repository
                </h5>
                <p className="card-text text-white">
                  A collection of
                  <strong>Java tutorials, snippets, and projects</strong> to
                  help you master
                  <strong>
                    object-oriented programming, data structures, and backend
                    development
                  </strong>
                  .
                </p>
                <a href="https://github.com/ruturajjadhav07/Java" className="btn btn-outline-primary mt-auto fw-bold">
                  Explore Java
                </a>
              </div>
            </div>
          </div>

          {/* React Repository */}
          <div className="col">
            <div className="card h-100">
              <img
                src=""
                className="card-img-top rounded-top-4"
                alt="React Repo"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-danger fw-bold">
                  ⚛️ React Repository
                </h5>
                <p className="card-text text-white">
                  Get hands-on with
                  <strong>
                    React components, hooks, APIs, and performance optimizations
                  </strong>
                  . Perfect for anyone looking to build scalable
                  <strong>React applications</strong>.
                </p>
                <a
                  href="https://github.com/ruturajjadhav07/React-Useful"
                  className="btn btn-outline-danger mt-auto fw-bold"
                >
                  Explore React
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

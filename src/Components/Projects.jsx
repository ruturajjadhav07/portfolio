import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  return (
    <div className="container text-white col-md-8 col-sm-12" style={{ fontFamily: "monospace" }} id="projects">
      <h3 className="text-success mt-4 fw-bold">🚀 My Projects</h3>

      <div className="row mt-3">
        {/* Full-Stack Social Media App */}
        <div className="col-md-6 col-sm-12 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-primary fw-bold">🌐 Social Media App</h5>
              <p className="card-text text-white">
                A full-stack social media platform with <strong>login, posts, likes, and comments</strong>. Built using
                <strong> Spring Boot & React</strong>, featuring <strong>CRUD operations</strong> for users and posts.
              </p>
              <a href="https://github.com/ruturajjadhav07/PhotoShare" className="btn btn-outline-primary mt-auto fw-bold">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* React Project Collection */}
        <div className="col-md-6 col-sm-12 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-danger fw-bold">⚛️ React Project Collection</h5>
              <p className="card-text text-white">
                Explore a variety of <strong>React projects</strong> covering <strong>state management, routing, API handling, and UI components</strong>.
              </p>
              <a href="https://github.com/ruturajjadhav07/React-Projects" className="btn btn-outline-danger mt-auto fw-bold">
                Explore Projects
              </a>
            </div>
          </div>
        </div>

        {/* Mechanic Finder */}
        <div className="col-md-6 col-sm-12 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-success fw-bold">📦 Customer-Order-Backend</h5>
              <p className="card-text text-white">
              A <strong>Spring Boot-powered backend</strong> that streamlines order management, customer handling, product inventory, and payments. It provides secure RESTful APIs for order processing, tracking, and efficient business operations.
              </p>
              <a href="https://github.com/ruturajjadhav07/Customer-Order-Backend" className="btn btn-outline-success mt-auto fw-bold">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Java Questions */}
        <div className="col-md-6 col-sm-12 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-warning fw-bold">Med Connect 💊</h5>
              <p className="card-text text-white">
              A React app that locates nearby <strong>medical stores</strong> using geolocation and Google Maps. Users can search, filter by distance, ratings, and open status, and view locations on an interactive map.              </p>
              <a href="https://github.com/ruturajjadhav07/Med-Connect" className="btn btn-outline-warning mt-auto fw-bold">
                Comming Soon 
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Useful Repositories */}
      <h3 className="text-success mt-2 text-center fw-bold">📚 Useful Repositories</h3>

      <div className="row mt-3">
        {/* Java Repository */}
        <div className="col-md-6 col-sm-12 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-primary fw-bold">☕ Java Repository</h5>
              <p className="card-text text-white">
                A collection of <strong>Java tutorials, snippets, and projects</strong> to help master <strong>OOP, data structures, and backend</strong>.
              </p>
              <a href="https://github.com/ruturajjadhav07/Java" className="btn btn-outline-primary mt-auto fw-bold">
                Explore Java
              </a>
            </div>
          </div>
        </div>

        {/* React Repository */}
        <div className="col-md-6 col-sm-12 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-danger fw-bold">⚛️ React Repository</h5>
              <p className="card-text text-white">
                Get hands-on with <strong>React components, hooks, APIs, and performance optimizations</strong>. Perfect for scalable React apps.
              </p>
              <a href="https://github.com/ruturajjadhav07/React-Useful" className="btn btn-outline-danger mt-auto fw-bold">
                Explore React
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

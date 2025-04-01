import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./Footer"

const Project = () => {
  return (
    <div id="projects">
      <div className="d-flex flex-column align-items-center" >
        {/* First Project */}
        <div className="col-md-10">
          <h2 className="mt-2 text-light">Recent Projects</h2>
          <div
            className="card mx-auto shadow-lg rounded overflow-hidden"
            style={{
              maxWidth: "900px",
              backgroundColor: "#22272e",
              border: "1px solid #444c56",
            }}
          >
            <div className="d-flex justify-content-center border-bottom">
              <img
                src="/BackendDevelopment.jpg"
                className="card-img-top img-fluid"
                alt="Customer Order Backend"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>

            <div className="card-body text-light">
              <h4 className="card-title text-warning fw-bold">
                Customer Order Backend
              </h4>
              <p>
                <span className="fw-bold">Tech Stack: </span>
                <span className="badge bg-dark me-2">Java</span>
                <span className="badge bg-success me-2">Spring Boot</span>
                <span className="badge bg-warning text-dark me-2">
                  Spring Security
                </span>
                <span className="badge bg-info text-dark me-2">MySQL</span>
                <span className="badge bg-secondary me-2">RESTful APIs</span>
                <span
                  className="badge bg-orange text-dark me-2"
                  style={{ backgroundColor: "#FF6C37" }}
                >
                  Postman
                </span>
                <span className="badge bg-dark">Git</span>
              </p>

              <p className="card-text mt-2">
                A backend system for managing customers, orders, and products.
                Secure RESTful APIs with authentication & role-based access.
              </p>

              <a
                href="https://github.com/ruturajjadhav07/Customer-Order-Backend"
                className="text-decoration-none fw-bold d-flex align-items-center"
              >
                <i className="bi bi-github me-2"></i> View Project Repo
              </a>
            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="mt-4 col-md-10">
          <div
            className="card mx-auto shadow-lg rounded overflow-hidden"
            style={{
              maxWidth: "900px",
              backgroundColor: "#22272e",
              border: "1px solid #444c56",
            }}
          >
            <div className="d-flex justify-content-center border-bottom">
              <img
                src="/PhotoShare.jpg"
                className="card-img-top img-fluid"
                alt="PhotoShare"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>

            <div className="card-body text-light">
              <h4 className="card-title text-warning fw-bold">PhotoShare</h4>
              <p>
                <span className="fw-bold">Tech Stack: </span>
                <span className="badge bg-primary me-2">React</span>
                <span className="badge bg-info text-dark me-2">Axios</span>
                <span className="badge bg-success me-2">Node.js</span>
                <span className="badge bg-danger me-2">npm</span>
                <span className="badge bg-dark me-2">Java</span>
                <span className="badge bg-success me-2">Spring Boot</span>
                <span className="badge bg-info text-dark me-2">MySQL</span>
                <span className="badge bg-secondary me-2">RESTful APIs</span>
                <span
                  className="badge bg-orange text-dark me-2"
                  style={{ backgroundColor: "#FF6C37" }}
                >
                  Postman
                </span>
                <span className="badge bg-dark">Git</span>
              </p>

              <p className="card-text mt-2">
                A full-stack social media platform where users can register,
                upload photos, interact through likes & comments, and manage
                profiles.
              </p>

              <a
                href="https://github.com/ruturajjadhav07/PhotoShare"
                className="text-decoration-none fw-bold d-flex align-items-center"
              >
                <i className="bi bi-github me-2"></i> View Project Repo
              </a>
            </div>
          </div>
        </div>

        {/* Other Useful Repositories */}
        <div className="mt-2 col-md-10">
          <h2 className="text-light">Other Useful Repositories</h2>

          {/* Row 1 */}
          <div className="row">
            {/* Repository 1 */}
            <div className="col-md-6">
              <div className="card bg-dark text-light shadow-lg h-100">
                <img
                  src="/react.jpg"
                  className="card-img-top"
                  alt="Repository 1"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">React Project Collection</h5>
                  <p className="card-text flex-grow-1">
                    A collection of 20 React projects covering state management,
                    routing, and APIs—perfect for learning and building
                    practical applications.
                  </p>
                  <a
                    href="https://github.com/ruturajjadhav07/React-Projects"
                    className="btn btn-warning text-dark fw-bold mt-auto"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Repository 2 */}
            <div className="col-md-6 mt-3 mt-md-0">
              <div className="card bg-dark text-light shadow-lg h-100">
                <img
                  src="/java.jpg"
                  className="card-img-top"
                  alt="Repository 2"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Java Repository</h5>
                  <p className="card-text flex-grow-1">
                    Welcome to my Java repository! 🚀 Explore Java from basics
                    to advanced with code snippets and clear explanations. Ideal
                    for all skill levels. Let's learn and grow!
                  </p>
                  <a
                    href="https://github.com/ruturajjadhav07/Java"
                    className="btn btn-warning text-dark fw-bold mt-auto"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Project;

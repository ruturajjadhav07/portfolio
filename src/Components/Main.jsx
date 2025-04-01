import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./Projects";

const Main = () => {
  return (
    <div id="main">
      <div className="d-flex justify-content-center">
        <div
          className="container mt-4 shadow-sm"
          style={{
            backgroundColor: "#161b22",
            color: "#c9d1d9",
            maxWidth: "1000px",
            // border: "1px solid #30363d",
          }}
        >
          {/* Header */}
          <h2 className="text-center mb-1" style={{ color: "#c9d1d9" }}>
            Ruturaj Satish Jadhav
          </h2>
          <h5 className="text-center" style={{ color: "#c9d1d9" }}>
            Hey, I’m Ruturaj, a Computer Science student passionate about
            exploring technology. With a strong foundation in Java and expertise
            in multiple programming languages, I enjoy solving complex problems
            using algorithms and data structures. Always eager to learn,
            innovate, and collaborate on impactful projects in professional
            environments. 🚀
          </h5>

          {/* What I Do Section */}
          <div className="mt-4">
            <h2 style={{ color: "#c9d1d9" }}>What I Do..?</h2>
            <ul>
              <li>
                Full-Stack Development: Java, Spring Boot, React & Node.js.
              </li>
              <li>
                Data Structures & Algorithms: Love solving challenges
                efficiently.
              </li>
              <li>
                Open-Source{" "}
                <a
                  href="https://github.com/ruturajjadhav07"
                  className="fw-bold"
                >
                  Contributions
                </a>
                : Actively sharing knowledge & learning.
              </li>
              <li>
                Continuous Learning: Exploring tech trends & best practices.
              </li>
            </ul>
          </div>

          {/* Tools Section */}
          <div>
            <h2>Tools that I have used</h2>
            <div className="d-flex flex-wrap gap-2">
              <img
                src="https://img.shields.io/badge/Java-%23F7DB51?style=for-the-badge&logo=java&logoColor=black"
                alt="Java badge"
              />
              <img
                src="https://img.shields.io/badge/Spring%20Boot-%236DB33F?style=for-the-badge&logo=springboot&logoColor=white"
                alt="Spring Boot badge"
              />
              <img
                src="https://img.shields.io/badge/React-%2320232a?style=for-the-badge&logo=react&logoColor=61DAFB"
                alt="React badge"
              />
              <img
                src="https://img.shields.io/badge/Node.js-%23339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
                alt="Node.js badge"
              />
              <img
                src="https://img.shields.io/badge/HTML5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML5 badge"
              />
              <img
                src="https://img.shields.io/badge/CSS3-%231572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS3 badge"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                alt="JavaScript badge"
              />
              <img
                src="https://img.shields.io/badge/Git-%23F05033?style=for-the-badge&logo=git&logoColor=white"
                alt="Git badge"
              />
              <img
                src="https://img.shields.io/badge/GitHub-%23181717?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub badge"
              />
              <img
                src="https://img.shields.io/badge/MySQL-%234479A1?style=for-the-badge&logo=mysql&logoColor=white"
                alt="MySQL badge"
              />
              <img
                src="https://img.shields.io/badge/Visual%20Studio%20Code-%23007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"
                alt="VS Code badge"
              />
              <img
                src="https://img.shields.io/badge/IntelliJ%20IDEA-%23000000?style=for-the-badge&logo=intellijidea&logoColor=white"
                alt="IntelliJ IDEA badge"
              />
              <img
                src="https://img.shields.io/badge/Eclipse-%232C2255?style=for-the-badge&logo=eclipse&logoColor=white"
                alt="Eclipse badge"
              />
              <img
                src="https://img.shields.io/badge/Docker-%232496ED?style=for-the-badge&logo=docker&logoColor=white"
                alt="Docker badge"
              />
              <img
                src="https://img.shields.io/badge/Supabase-%233ECF8E?style=for-the-badge&logo=supabase&logoColor=white"
                alt="Supabase badge"
              />
              <img
                src="https://img.shields.io/badge/MongoDB-%2347A248?style=for-the-badge&logo=mongodb&logoColor=white"
                alt="MongoDB badge"
              />
            </div>
          </div>

          <Project />
        </div>
      </div>
    </div>
  );
};

export default Main;

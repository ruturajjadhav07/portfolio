import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Projects from "./Projects";

const About = () => {
  const icons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  ];

  return (
    <div id="about">
      <div
        className="container text-white col-md-8 py-4"
        style={{ fontFamily: "monospace" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold fs-1 text-warning">Ruturaj Satish Jadhav</h2>
          <h5 className="fs-3 text-info fw-bold">About Me</h5>
          <p className="fs-5 mt-3 px-4">
            Hey there! 👋 I love building things that{" "}
            <strong>make an impact</strong>. Passionate about{" "}
            <strong>problem-solving, coding, and innovation</strong>. Always
            eager to <strong>learn, explore, and contribute</strong>. 🚀
          </p>
        </div>

        <div>
          <h3 className="mt-3 text-success fw-bold">What I Do</h3>
          <ul className="fs-5 mt-3">
            <li>
              <strong>Full-Stack Development:</strong> Java, Spring Boot, React
              & Node.js.
            </li>
            <li>
              <strong>Data Structures & Algorithms:</strong> Love solving
              challenges efficiently.
            </li>
            <li>
              <strong>Open-Source Contributions:</strong> Actively sharing
              knowledge & learning.
            </li>
            <li>
              <strong>Continuous Learning:</strong> Exploring tech trends & best
              practices.
            </li>
          </ul>
        </div>

        <h3 className="text-success mt-3 fw-bold">Tools that I have used:</h3>
        <div
          style={{ overflow: "hidden", display: "flex", whiteSpace: "nowrap" }}
        >
          <motion.div
            className="d-flex"
            initial={{ x: 0 }}
            animate={{ x: [0, "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            style={{ display: "flex" }}
          >
            {[...icons, ...icons].map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="Tech Icon"
                style={{ width: "50px", margin: "0 15px" }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

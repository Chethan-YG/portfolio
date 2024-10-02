import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about bg-light">
      <div
        className="my_main_container mx-5 my-0"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <h2 className="mb-2 text-center">
          <span className="d-block my_main_text">About Me</span>
          <small className="d-block my_main_msg">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </small>
        </h2>
        <div
          className="row d-flex justify-content-between"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="col-md-6 mt-5">
            <h3 className="fw-bold fs-1 mb-5">Get to know me!</h3>
            <p className="about-info">
              I am an <b>undergraduate</b> student pursuing a <b>B.E.</b> degree
              with a focus on backend development. Currently, I am learning{" "}
              <b>Java full-stack development</b> with <b>Spring Boot</b> and{" "}
              <b>React</b>. My goal is to build strong foundational skills in
              backend development to support the functionality of web
              applications effectively. You can find some of my projects in the{" "}
              <b>Projects</b> section.
            </p>

            <p className="about-info">
              I am passionate about sharing my learnings in web development to
              contribute to the developer community. Please feel free to connect
              with me on{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/chethan-y-g"
              >
                <b>LinkedIn</b>
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/chethan_ediga_28/"
              >
                <b>Instagram</b>
              </a>
              , where I share useful content related to web development and
              programming.
            </p>

            <p className="about-info">
              I am eager to explore <b>job opportunities</b> where I can apply
              and expand my backend development skills, learn from experienced
              professionals, and contribute to impactful projects. If you have a
              suitable opportunity that aligns with my skills and goals, I would
              appreciate hearing from you.
            </p>
            <div>
              <a href="#Contact">
                <button className="my-btn">Contact</button>
              </a>
            </div>
          </div>

          <div className="col-md-5 mt-5">
            <h3 className="fw-bold fs-1 mb-5">My Skills</h3>
            <div className="skills-container">
              {skills.map((skill) => (
                <div className="skill" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const skills = [
  "Java",
  "Spring Framework",
  "Spring Boot",
  "Hibernate",
  "REST API",
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "React",
  "SQL",
  "Git",
];

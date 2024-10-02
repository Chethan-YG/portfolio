import React, { useEffect } from "react";
import "./Case1.css";
import { useLocation, useNavigate } from "react-router-dom";
import BookImg from "../images/Library.jpg";

export default function Case2() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavClick = (id) => {
    navigate("/", { replace: true });
    setTimeout(() => {
      navigate(`/#${id}`, { replace: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const skills = [
    "Java",
    "Spring Boot",
    "HTML",
    "CSS",
    "JavaScript",
    "MVC",
    "REST API",
    "Hibernate",
  ];

  return (
    <div>
      <div className="row justify-content-center text-center container m-0">
        <div
          className="col-lg-10 col-md-10"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h1 className="heading-primary display-4">
            <span>Book Management</span>
          </h1>
          <div className="my-5">
            <p className="lead mytext">
          The Book Management System is a web-based application built using Java, Spring Boot to manage book 
          collection efficiently. It provides core features like adding, updating, retrieving, and deleting book records.</p>
          </div>
          <a href="https://www.dropbox.com/scl/fi/pbykhigr12ttrcttwtkej/Screen-Recording-2024-08-13-125521.mp4?rlkey=2lhp2eth8bbpn7syrabhaada4&st=rrqxoxhr&dl=0"
          target="_blank"
          rel="noopener noreferrer">
            <button className="my-btn">Project Link</button>
          </a>
        </div>
      </div>

      {/* Project Image Section */}
      <div
        className="row d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-duration="400"
      >
        <div className="col-md-7 col-lg-9">
          <div className="mt-5">
            <img
              src={BookImg}
              alt="Project mockup"
              className="img-fluid rounded-start"
              loading="lazy"
            />
          </div>

          {/* Project Overview Section */}
          <div className="p-5">
            <div
              className="my-5 py-5"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <h2 className="fw-bold fs-1 mb-5">Project Overview</h2>
              <p className="case_info">
              The <b>Book Management System</b> is a comprehensive application designed to streamline
               the management of book inventories in libraries. Built using Java Spring Boot,
                this system provides efficient <b>CRUD (Create, Read, Update, Delete)</b> functionality
                 for managing books, allowing users to easily add new entries, update existing records, 
                 delete outdated information, and retrieve book details.
              </p>
              <p className="case_info">
              On the backend, the application employs a RESTful API architecture built with Java Spring Boot,
               facilitating efficient communication between the client and server. This architecture allows
                for seamless data exchange and improves the application's scalability. The data is stored
                 and managed using MySQL, ensuring data integrity and quick retrieval of book records through
                  optimized queries.
              </p>
            </div>

            <div
              className="my-5 py-5"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <h2 className="fw-bold fs-1 mb-5">Tools Used</h2>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <div key={index} className="skill">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="my-5 py-5"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <h2 className="fw-bold fs-1 mb-5">See Demo</h2>
              <div className="col">
                <a
                  href="https://www.dropbox.com/scl/fi/pbykhigr12ttrcttwtkej/Screen-Recording-2024-08-13-125521.mp4?rlkey=2lhp2eth8bbpn7syrabhaada4&st=rrqxoxhr&dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="d-block my-btn">Project Link</button>
                </a>

                <button
                  className="d-block home_btn"
                  onClick={() => handleNavClick("Home")}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

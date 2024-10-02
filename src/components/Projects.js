import React from "react";
import "./Projects.css";
import { Link } from 'react-router-dom';
import QuickCarImg from '../images/QuickCar.jpg';
import LibraryImg from '../images/Library.jpg'

const Project = ({ imgSrc, title, description, link }) => (
  <div className="row d-flex justify-content-between project-section" data-aos="fade-up" data-aos-duration="400">
    <div className="col-md-7 mt-5">
      <img src={imgSrc} alt="project" className="img-fluid rounded-start" loading="lazy" />
    </div>
    <div className="col-md-4 px-3 text-md-start text-center">
      <h3 className="fw-bold fs-1 my-5">{title}</h3>
      <p className="fs-3 mb-0 text-align-start">{description}</p>
      <Link className="my-btn text-decoration-none fs-3" to={link}>Case Study</Link>
    </div>
  </div>
);

export default function Projects() {
  const projects = [
    {
      imgSrc: QuickCarImg,
      title: "QuickCar",
      description: "QuickCar is a car rental system designed to streamline the process of booking rental vehicles. It allows users to browse available cars, filter by criteria such as car type, brand, or transmission, and book cars for rental. The system includes both customer and admin functionalities, enabling admins to manage car listings and bookings while customers can view car details, make reservations, and receive invoices.",
      link: "/Case1"
    },
    {
      imgSrc: LibraryImg,
      title: "Book Management",
      description: "The Book Management System is a web-based application built using Java, Spring Boot, and MySQL to manage book collection efficiently. It provides core features like adding, updating, retrieving, and deleting book records. The front end is developed using HTML, CSS, and Javascript, offering a clean and responsive user interface. The backend is powered by Spring Boot with MySQL used for reliable data storage and management.",
      link: "/Case2"
    }
  ];

  return (
    <div>
      <div className="my_main_container pb-0" data-aos="fade-up" data-aos-duration="400">
        <h2 className="mb-2 text-center">
          <span className="d-block my_main_text">Projects</span>
          <small className="d-block my_main_msg">
            Here you will find some of the personal projects that I created with
            each project containing its own case study
          </small>
        </h2>
      </div>

      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

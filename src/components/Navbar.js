import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import profile from "../images/profile.jpg";


const navItems = [
  { id: "Home", label: "HOME" },
  { id: "About", label: "ABOUT" },
  { id: "Projects", label: "PROJECTS" },
  { id: "Contact", label: "CONTACT" }
];



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); 

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    // Scroll to the section after navigation
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }, 100); 
  };

  return (
    <header>
      <nav
        className={`navbar navbar-expand-md navbar-light bg-white fixed-top shadow ${isOpen ? "navbar-open" : ""}`}
      >
        <div className="container-fluid ps-0">
          <div className="d-flex align-items-center">
            <div className="navbar-brand ps-3">
              <img
                src={profile}
                alt="Profile Pic"
                width="50"
                height="50"
                className="d-inline-block align-text-top rounded-circle"
              />
            </div>
            <div className="myname fw-bold">CHETHAN Y G</div>
          </div>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
            onFocus={(e) => e.target.blur()}
          >
            <span>
              <i className={`bi display-2 ${isOpen ? "bi-x" : "bi-list"}`}></i>
            </span>
          </button>
          <div
            className={`collapse navbar-collapse mt-2 justify-content-end w-100 ${isOpen ? "show" : ""}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item p-4">
                  <button className="nav-link" onClick={() => handleNavClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};


export default Navbar;
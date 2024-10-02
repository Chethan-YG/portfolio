import React from "react";
import "./Footer.css";
import { socialLinks } from "./socialLinks"; 
export default function Footer() {
  return (
    <footer className="text-white bg-black footer">
      <div className="mycontainer px-5">
        <div className="row d-flex justify-content-between social_main">
          {/* Developer Info Section */}
          <div className="col-md-5 info-section order-1 order-md-0 mt-5">
            <h2 className="heading heading-sm text-uppercase fw-bold">
              Chethan Y G
            </h2>
            <p className="h3 text-white mt-5">
              An ambitious Java Fullstack Developer crafting and overseeing
              websites and web applications to drive overall product success.
            </p>
          </div>

          {/* Social Section */}
          <div className="col-md-2 my-5 order-0 order-md-1 text-md-start">
            <h2 className="heading heading-sm text-uppercase fw-bold">
              <span>Social</span>
            </h2>
            <div className="d-flex justify-content-md-start mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  href={link.href}
                  className="me-3 text-white"
                  aria-label={link.label}
                >
                  <i className={`${link.icon} fs-1`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="mx-5" />

      <div className="footer-copy">
        <div className="col">
          <p className="text-center py-4">
            &copy; Copyright{" "}
            <span id="currentYear">{new Date().getFullYear()}</span>. Made by
            <a href="#Home" className="text-white fw-bold ms-2">
              CHETHAN Y G
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

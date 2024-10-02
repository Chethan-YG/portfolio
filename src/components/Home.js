import React, { useEffect } from "react";
import "./Home.css";
import { useLocation } from "react-router-dom";
import { socialLinks } from "./socialLinks";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <div className="row justify-content-center text-center container m-0">
        <div
          className="col-lg-10 col-md-10"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h1 className="heading-primary display-4">
            <span>Hey, I'm Chethan</span>
          </h1>
          <div className="my-5">
            <p className="lead mytext">
              An Ambitious Java Fullstack Developer focused on building and
              managing websites and web applications to ensure the success of
              the overall product.
            </p>
          </div>
          <a href="#Projects">
            <button className="my-btn">Projects</button>
          </a>
        </div>

        <div className="home-hero__socials">
          {socialLinks.map((link, index) => (
            <div key={index} className="home-hero__social">
              <a
                href={link.href}
                className="home-hero__social-icon-link"
                rel="noreferrer"
                target="_blank"
                aria-label={link.label}
              >
                <i className={`${link.icon} fs-1 home-hero__social-icon `}></i>
              </a>
            </div>
          ))}
        </div>

        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse"></div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import "./Case1.css";
import { useLocation, useNavigate } from "react-router-dom";
import QuickCarImg from "../images/QuickCar.jpg";

export default function Case1() {
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
    "Bootstrap",
    "React",
    "SQL",
    "Cloudinary",
    "Machine Learning (Damage Detection)",
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
            <span>QuickCar</span>
          </h1>
          <div className="my-5">
            <p className="lead mytext">
              QuickCar is an advanced car rental system designed to streamline
              vehicle rentals. It allows users to browse and filter cars based
              on criteria like type, brand, and transmission, and provides the
              functionality to book cars online.
            </p>
          </div>
          <a
            href="https://www.dropbox.com/scl/fi/5xijs94tk1qvt0l2ycr01/Screen-Recording-2024-08-08-200836.mp4?rlkey=unt14g8tolcxtg37n28pb3y11&st=bhwyd6l3&dl=0"
            target="_blank"
            rel="noopener noreferrer"
          >
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
              src={QuickCarImg}
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
                <b>QuickCar</b> is a cutting-edge car rental solution built with{" "}
                <b>Java, Spring Boot, React, and MySQL</b>. It provides users
                with an intuitive platform to view, search, and filter available
                vehicles, making the booking process seamless. With integration
                into <b>Cloudinary</b>, users can enjoy high-quality images of
                cars, enhancing the overall rental experience.
              </p>
              <p className="case_info">
                A standout feature of QuickCar is its{" "}
                <b>Machine Learning model</b> for damage detection, automating
                the identification of car damages after rentals. This not only
                ensures transparency but also enhances trust between customers
                and the rental service, streamlining operations.{" "}
              </p>
              <p className="case_info">
                Designed for scalability and easy management, QuickCar empowers
                admins to efficiently add, update, or remove car listings.
                Additionally, users can hire drivers for longer trips, creating
                a comprehensive rental experience. With its focus on technology
                and user satisfaction, QuickCar is poised to transform the car
                rental industry.
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
                  href="https://www.dropbox.com/scl/fi/5xijs94tk1qvt0l2ycr01/Screen-Recording-2024-08-08-200836.mp4?rlkey=unt14g8tolcxtg37n28pb3y11&st=bhwyd6l3&dl=0"
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

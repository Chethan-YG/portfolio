import React, { useState } from "react";
import Swal from "sweetalert2";
import Loader from "./Loader";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = "Invalid email format";
        formIsValid = false;
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    fetch("http://ec2-13-211-68-212.ap-southeast-2.compute.amazonaws.com:8080/contact/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.text();
      })
      .then((data) => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: data,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      })
      .finally(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  return (
    <div className="maindiv">
      {loading && <Loader />}
      <div
        className="my_main_container mx-5 my-0"
        data-aos="fade-up"
        data-aos-duration="400"
      >
        <h2 className="mb-2 text-center">
          <span className="d-block my_main_text">Contact</span>
          <small className="d-block my_main_msg">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </small>
        </h2>
        <div
          className="row justify-content-center form_container"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <div className="col-lg-8 p-5 mx-5 shadow-lg bg-white rounded-4 myform">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-5">
                <label htmlFor="inputName">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="inputName"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="form-group mb-5">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="inputEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group mb-5">
                <label htmlFor="inputMessage">Message</label>
                <textarea
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  id="inputMessage"
                  name="message"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Your Message"
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>
              <div className="text-end">
                <button type="submit" className="my-btn contact">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useVolunteer } from "../reactQueryCustomHooks";

const VolunteerComp = () => {
  const { createVolunteer } = useVolunteer();

  const handleSubmit = (values) => {
    const data = {
      fullname: values.name,
      email: values.email,
      phone: values.phone,
      availability: values.availability,
      message: values.message,
    };
    console.log(data);
    createVolunteer(data);
  };

  return (
    <>
      <ToastContainer
        theme="colored"
        position="top-center"
        className="text-white"
      />
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Fullname is mandatory")
            .max(15, "Fullname must be less than 15 character")
            .min(5, "Fullname should be at least 5 character"),
          email: Yup.string()
            .required("email is mandatory")
            .email("invalid email format"),
          phone: Yup.string()
            .required("Phone number is mandatory")
            .min(5, "Phone number must be at least 5 numeric characters")
            .max(13, "Phone number must not be more than 13 numeric characters")
            .matches(/^[0-9]+$/, "Phone number must contain only numbers"),
          availability: Yup.string()
            .required("avalilability is mandatory")
            .max(30, " must be of 30 character"),
          message: Yup.string()
            .required("message is mandatory")
            .min(20, "message must be of 20 character"),
        })}
        onSubmit={handleSubmit}
      >
        <div className="volunteer-page">
          <header className="bg-success text-white text-center py-5">
            <h1>Become a Volunteer</h1>
            <p>Join us in making a difference in the community</p>
          </header>

          <section className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <h2 className="mb-4">Volunteer Sign-Up</h2>
                <Form autoComplete="off">
                  <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">
                      Full Name
                    </label>
                    <Field
                      name="name"
                      type="text"
                      className="form-control"
                      id="fullname"
                      placeholder="Enter your name"
                      required
                    />
                    <ErrorMessage name="name">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                    <ErrorMessage name="email">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <Field
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your phone number"
                      name="phone"
                      required
                    />
                    <ErrorMessage name="phone">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="availability" className="form-label">
                      Availability
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="availability"
                      placeholder="Enter your availability"
                      name="availability"
                      required
                    />
                    <ErrorMessage name="availability">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <Field
                      style={{ height: "110px" }}
                      type="text"
                      className="form-control"
                      id="message"
                      rows="3"
                      placeholder="Why do you want to volunteer?"
                      name="message"
                      required
                    ></Field>
                    <ErrorMessage name="message">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </Form>
              </div>
              <div className="col-md-6">
                <h2 className="mb-4">Why Volunteer?</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    Make a positive impact on the community
                  </li>
                  <li className="list-group-item">
                    Meet new people and build relationships
                  </li>
                  <li className="list-group-item">
                    Gain new skills and experiences
                  </li>
                  <li className="list-group-item">
                    Be part of a dedicated team
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-light py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card shadow-sm border-0 mb-4">
                    <div className="card-body">
                      <p className="card-text">
                        "Volunteering here has been an incredibly rewarding
                        experience. I've met amazing people and feel like I'm
                        making a real difference."
                      </p>
                      <h5 className="card-title">- Jane Doe</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card shadow-sm border-0 mb-4">
                    <div className="card-body">
                      <p className="card-text">
                        "The sense of community and purpose I get from
                        volunteering is unmatched. It's great to be part of such
                        a dedicated team."
                      </p>
                      <h5 className="card-title">- John Smith</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card shadow-sm border-0 mb-4">
                    <div className="card-body">
                      <p className="card-text">
                        "I've gained so many new skills and experiences through
                        volunteering. It's been an invaluable part of my
                        personal growth."
                      </p>
                      <h5 className="card-title">- Mary Johnson</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Formik>
    </>
  );
};

export default VolunteerComp;

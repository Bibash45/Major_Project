import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import useAuth from "../customHook/useAuth";

const DonateComp = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    typeOfFood: "",
    quantity: "",
    expirationDate: "",
    address: "",
    dateTime: "",
    message: "",
  };
  const { user, token } = useAuth();

  const [donateData, setDonateData] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setDonateData({ ...donateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/donations", donateData)
      .then((response) => {
        setSuccessMessage("Donation submitted successfully!");
        setErrorMessage("");
        setDonateData(initialState); // Reset form
      })
      .catch((error) => {
        setErrorMessage("Error submitting donation. Please try again.");
        setSuccessMessage("");
      });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-4">Help Us Fight Hunger</h1>
          <p className="lead">Your food donation can make a difference.</p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="donation-form container my-5">
        <h2 className="text-center mb-4">Donate Food</h2>
        <form
          className="shadow p-5 rounded-2"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={donateData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={donateData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={donateData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="typeOfFood" className="form-label">
              Type of Food
            </label>
            <input
              type="text"
              className="form-control"
              id="typeOfFood"
              name="typeOfFood"
              value={donateData.typeOfFood}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              value={donateData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="expirationDate" className="form-label">
              Expiration Date
            </label>
            <input
              type="date"
              className="form-control"
              id="expirationDate"
              name="expirationDate"
              value={donateData.expirationDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Pickup/Drop-off Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={donateData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateTime" className="form-label">
              Preferred Date and Time
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="dateTime"
              name="dateTime"
              value={donateData.dateTime}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Special Instructions
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={donateData.message}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>
          {user && token ? (
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          ) : (
            <button className="btn btn-danger">please login</button>
          )}
        </form>
        {successMessage && (
          <div className="alert alert-success mt-3">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="alert alert-danger mt-3">{errorMessage}</div>
        )}
      </section>

      {/* How It Works */}
      <section className="how-it-works bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">How It Works</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h4 className="card-title">Step 1</h4>
                  <p className="card-text">
                    Register and fill in the donation form.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h4 className="card-title">Step 2</h4>
                  <p className="card-text">
                    We arrange for pickup or drop-off.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h4 className="card-title">Step 3</h4>
                  <p className="card-text">Your food reaches those in need.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* Testimonials */}
      <section className="testimonials py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Donors Say</h2>
          <div className="row">
            <div className="col-md-6">
              <blockquote className="blockquote custom-success">
                <p className="mb-0">
                  "Donating food has never been easier. I'm glad I could help!"
                </p>
                <footer className="blockquote-footer mt-2">John Doe</footer>
              </blockquote>
            </div>
            <div className="col-md-6">
              <blockquote className="blockquote custom-success">
                <p className="mb-0">
                  "A wonderful initiative. I'm happy to contribute."
                </p>
                <footer className="blockquote-footer mt-2">Jane Smith</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonateComp;

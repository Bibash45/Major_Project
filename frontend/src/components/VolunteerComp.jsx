import React, { useState } from "react";
import axios from "axios";

const VolunteerComp = () => {
  const initialState = {
    fullname: "",
    email: "",
    phone: "",
    availability: "",
    message: "",
  };

  const [volunteerData, setVolunteerData] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVolunteerData({
      ...volunteerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/volunteer",
        volunteerData
      );
      console.log("Data submitted successfully:", response.data);
      setVolunteerData(initialState); // Reset the form after successful submission
    } catch (error) {
      console.error("Submitting data failed:", error.response?.data?.error || error.message);
      setError("Error submitting data");
    }
  };

  return (
    <div className="volunteer-page">
      <header className="bg-success text-white text-center py-5">
        <h1>Become a Volunteer</h1>
        <p>Join us in making a difference in the community</p>
      </header>

      <section className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4">Volunteer Sign-Up</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Enter your name"
                  value={volunteerData.fullname}
                  name="fullname"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={volunteerData.email}
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={volunteerData.phone}
                  name="phone"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="availability" className="form-label">
                  Availability
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="availability"
                  placeholder="Enter your availability"
                  name="availability"
                  value={volunteerData.availability}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Why do you want to volunteer?"
                  name="message"
                  value={volunteerData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
            {error && <p className="text-danger mt-3">{error}</p>}
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
              <li className="list-group-item">Be part of a dedicated team</li>
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
                    experience. I've met amazing people and feel like I'm making
                    a real difference."
                  </p>
                  <h5 className="card-title">- Jane Doe</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-body">
                  <p className="card-text">
                    "The sense of community and purpose I get from volunteering
                    is unmatched. It's great to be part of such a dedicated
                    team."
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
                    volunteering. It's been an invaluable part of my personal
                    growth."
                  </p>
                  <h5 className="card-title">- Mary Johnson</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerComp;

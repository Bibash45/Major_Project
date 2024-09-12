import React, { useState } from "react";
import useAuth from "../customHook/useAuth";
import { Link } from "react-router-dom";

const RequestFood = () => {
  const { token, user } = useAuth();
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    reason: "",
    foodType: "",
    quantity: "", // New field for quantity
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to backend
    console.log("Request submitted:", formData);
    alert("Food request submitted successfully!");
    // Reset the form after submission
    setFormData({
      name: "",
      contact: "",
      address: "",
      reason: "",
      foodType: "",
      quantity: "",
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-muted fs-1">Request Food</h2>
      <form
        onSubmit={handleSubmit}
        className="col-md-8 mx-auto shadow p-4 rounded-3"
      >
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoFocus
          />
        </div>

        {/* Contact */}
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact Number
          </label>
          <input
            type="text"
            className="form-control"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Delivery Address
          </label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Type of Food */}
        <div className="mb-3">
          <label htmlFor="foodType" className="form-label">
            Type of Food
          </label>
          <select
            className="form-select"
            id="foodType"
            name="foodType"
            value={formData.foodType}
            onChange={handleChange}
            required
          >
            <option value="">Select the type of food</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Quantity */}
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity (for how many people)
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        {/* Reason */}
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">
            Reason for Request
          </label>
          <textarea
            className="form-control"
            id="reason"
            name="reason"
            rows="4"
            value={formData.reason}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        {user && token ? (
          <button type="submit" className="btn btn-success mt-3 w-100">
            Submit Request
          </button>
        ) : (
          <Link to="/login" type="submit" className="btn btn-danger mt-3 w-100">
            please login
          </Link>
        )}
      </form>
    </div>
  );
};

export default RequestFood;

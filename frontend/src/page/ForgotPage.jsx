import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Forgot = () => {
  const [value, setValue] = useState({
    email: "",
    buttonText: "Request password reset link",
  });

  const { email } = value;

  const handleChange = (name) => (e) => {
    const { value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setValue({ ...value, buttonText: "Submitting" });
    
    axios({
      method: "PUT",
      url: `http://localhost:5000/api/forgot-password`,
      data: { email },
    })
      .then((response) => {
        toast.success(response.data.message);
        setValue({ ...value, buttonText: "Requested" });
      })
      .catch((err) => {
        setValue({ ...value, buttonText: "Request password reset link" });
        toast.error(err.response.data.error);
      });
  };

  const passwordForgotForm = () => (
    <form className="mt-4">
      <div className="form-group mb-3">
        <label htmlFor="email" className="text-muted">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={value.email}
          onChange={handleChange("email")}
          required
        />
      </div>

      <button className="btn btn-success btn-block" onClick={clickSubmit}>
        {value.buttonText}
      </button>
    </form>
  );

  return (
    <div className="container mt-5" style={{marginBottom:"125px",paddingTop:"50px"}}>
      <ToastContainer />
      <h1 className="text-center text-muted">Forgot Password</h1>
      <p className="lead text-center text-muted mb-4">
        Please enter your email address and you'll receive a verification link to change your password.
      </p>
      <div className="card p-4 shadow">
        {passwordForgotForm()}
      </div>
    </div>
  );
};

export default Forgot;

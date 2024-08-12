import React, { useContext, useState } from "react";
import axios from "axios";
import { myLoginContext } from "../context/loginContext";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const SignComp = () => {
  const { setLog, isSignUp, isLogin, setIsLogin, setSignUp } =
    useContext(myLoginContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Post registration data to backend
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
      });
      setSuccessMessage(true);
      console.log("Registration successful:", response.data);
      // Handle successful registration
      // For example, redirect to login page or show a success message
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
      setError(
        err.response?.data?.error || "Registration failed. Please try again."
      );
    }
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-10 col-md-8 col-lg-6 m-auto">
          <main className="form-signin w-100 m-auto">
            <form
              className="shadow p-5 "
              style={{ position: "relative" }}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="text-center">
                <h1 className="h3 mb-3 fw-normal">Please Register </h1>
              </div>

              <div className="form-floating my-2">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating my-2">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="floatingPassword">Email</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="form-check text-start my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="remember-me"
                  id="flexCheckDefault"
                  required
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Accept all terms and conditions.
                </label>
              </div>
              <button className="btn btn-success w-100 py-2" type="submit">
                Register
              </button>
              <div className="d-flex  justify-content-between">
                <span>
                  already have an account?{" "}
                  <a
                    href="login.html"
                    className="text-success"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLogin(true);
                      setSignUp(false);
                    }}
                  >
                    login
                  </a>
                </span>
              </div>

              <Link
                id="cross"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "20px",
                  color: "black",
                }}
                to="/"
              >
                <RxCross1 />
              </Link>
            </form>
            {error && (
              <div className="alert alert-danger mt-3">Registration failed</div>
            )}
            {successMessage && (
              <div className="alert alert-success mt-3">
                Registration successful
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default SignComp;

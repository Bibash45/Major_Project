import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { myLoginContext } from "../context/loginContext";
import { AuthContext } from "../context/AuthContext"; // Correct path to AuthContext

const LoginCom = () => {
  const { setIsLogin, setSignUp } = useContext(myLoginContext);
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        {
          name,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { token, user } = response.data;

      login(token, user);

      setSuccessMessage("Login successful");
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err.response?.data?.error || err.message);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-10 col-md-8 col-lg-6 m-auto">
          <main className="form-signin w-100 m-auto">
            <form
              className="shadow p-5"
              style={{ position: "relative" }}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="text-center">
                <img
                  className="mb-4 img-fluid w-25 w-sm-50 w-md-75 w-lg-100 w-xl-100 w-xxl-100"
                  src="/layout/images/f.jpeg"
                  alt=""
                />
                <h1 className="h3 mb-3 fw-normal">Please log in</h1>
              </div>

              <div className="form-floating my-2">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="floatingInput">Username</label>
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
                  Remember me
                </label>
              </div>
              <button className="btn btn-success w-100 py-2" type="submit">
                Login
              </button>
              <div className="d-flex justify-content-between">
                <span className="d-sm-flex flex-sm-column d-xl-flex flex-xl-row d-lg-flex  flex-lg-row flex-sm-column d-flex flex-column">
                  Don't have an account?
                  <a
                    href="register.html"
                    className="text-success"
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle sign-up navigation
                      setIsLogin(false);
                      setSignUp(true);
                    }}
                  >
                    Register Now
                  </a>
                </span>
                <a href="" className="text-success">
                  Forget Password
                </a>
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
            {successMessage && (
              <div className="alert alert-success mt-3">{successMessage}</div>
            )}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </main>
        </div>
      </div>
    </div>
  );
};

export default LoginCom;

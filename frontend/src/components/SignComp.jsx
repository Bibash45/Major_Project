import React, { useContext, useState } from "react";
import axios from "axios";
import { myLoginContext } from "../context/loginContext";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { AuthContext } from "../context/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRegisterUser } from "../reactQueryCustomHooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignComp = () => {
  const { setIsLogin, setSignUp } = useContext(myLoginContext);
  const { login } = useContext(AuthContext);

  const [successMessage, setSuccessMessage] = useState();

  const { createUser } = useRegisterUser(setSuccessMessage);
  // console.log(data);

  const handleSubmit = (values) => {
    const data = {
      name: values.username,
      email: values.email,
      password: values.password,
    };
    createUser(data);
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:5000/api/register",
    //       {
    //         name: values.username,
    //         email: values.email,
    //         password: values.password,
    //       },
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     login(token, user);

    //     setSuccessMessage(true);
    //     console.log("Registration successful:", response.data);
    //   } catch (err) {
    //     console.error("Registration failed:", err.response?.data || err.message);
    //     setError(
    //       err.response?.data?.error || "Registration failed. Please try again."
    //     );
    //   }
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
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .required("username is mandatory")
            .max(15, "username must be less than 15 character")
            .min(5, "username should be at least 5 character"),
          email: Yup.string()
            .required("email is mandatory")
            .email("invalid email format"),
          password: Yup.string()
            .required("password is mandatory")
            .matches(
              /^(?=.*[a-z])(?=.*[A-z])(?=.*[0-9])(?=.*[@#$/_])[a-zA-Z0-9@#$!%_-]{8,30}$/,
              "password must contain at least one uppercase alphabet, one lowercase alphabets, a special character and a numeric value. And it must be at least of 8 characters."
            ),
        })}
        onSubmit={handleSubmit}
      >
        <div className="container my-5">
          <div className="row">
            <div className="col-sm-10 col-md-8 col-lg-6 m-auto">
              <main className="form-signin w-100 m-auto">
                <Form
                  className="shadow p-5 "
                  style={{ position: "relative" }}
                  autoComplete="off"
                >
                  <div className="text-center">
                    <h1 className="h3 mb-3 fw-normal">Please Register </h1>
                  </div>

                  <div className="form-floating my-2">
                    <Field
                      type="text"
                      name="username"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Username"
                      required
                    />
                    <label htmlFor="floatingInput">Username</label>
                    <ErrorMessage name="username">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-floating my-2">
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="email"
                      required
                    />
                    <label htmlFor="floatingPassword">Email</label>
                    <ErrorMessage name="email">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-floating">
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    <ErrorMessage name="password">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="form-check text-start my-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="remember-me"
                      id="flexCheckDefault"
                      required
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Accept all terms and conditions.
                    </label>
                  </div>
                  <button className="btn btn-success w-100 py-2" type="submit">
                    Register
                  </button>
                  <div className="d-flex justify-content-between">
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
                </Form>

                {successMessage && (
                  <div className="alert alert-success mt-3">
                    Registration successful
                  </div>
                )}
              </main>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default SignComp;

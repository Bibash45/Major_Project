import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { myLoginContext } from "../context/loginContext";
import { Formik, Form, Field,ErrorMessage } from "formik";
import * as Yup from "yup"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoginUser } from "../reactQueryCustomHooks";

const LoginCom = () => {
  const { setIsLogin, setSignUp } = useContext(myLoginContext);
 
  const [successMessage, setSuccessMessage] = useState("");
  const { loginUser } = useLoginUser( setSuccessMessage);


  const handleSubmit = (values) => {
    const data = {
      name: values.name,
      password: values.password,
    };
    loginUser(data);
  };

  return (
    <>
    <ToastContainer
        theme="colored"
        position="top-center"
        className="text-white"
      />
      <Formik
       initialValues={{ name: "", password: "" }}
       validationSchema={Yup.object({
         name: Yup.string().required("Username is required"),
         password: Yup.string().required("Password is required"),
       })}
      onSubmit={handleSubmit}>
        <div className="container my-5">
          <div className="row">
            <div className="col-sm-10 col-md-8 col-lg-6 m-auto">
              <main className="form-signin w-100 m-auto">
                <Form
                  className="shadow p-5"
                  style={{ position: "relative" }}
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
                    <Field
                    name="name"
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Username"
                      // value={name}
                      // onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <label htmlFor="floatingInput">Username</label>
                    <ErrorMessage name="name">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                  </div>
                  <div className="form-floating">
                    <Field
                    name="password"
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
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
                      Remember me
                    </label>
                  </div>
                  <button className="btn btn-success w-100 py-2" type="submit">
                    Login
                  </button>
                  <div className="d-flex justify-content-between">
                    <span className="d-sm-flex flex-sm-column d-xl-flex flex-xl-row d-lg-flex  flex-lg-row flex-sm-column d-flex flex-column">
                      Don't have an account?
                      <Link
                        to="register.html"
                        className="text-success"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle sign-up navigation
                          setIsLogin(false);
                          setSignUp(true);
                        }}
                      >
                        Register Now
                      </Link>
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
                </Form>
                {successMessage && (
                  <div className="alert alert-success mt-3">
                    {successMessage}
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

export default LoginCom;

import React, { useContext } from "react";
import { myLoginContext } from "../context/loginContext";
import { Link } from "react-router-dom";
import useAuth from "../customHook/useAuth";
import ProfileIcon from "./ProfileIcon";

const Nav = () => {
  const { setLog, log, setIsLogin, isLogin, setSignUp } =
    useContext(myLoginContext);
  const { user, token } = useAuth();
  console.log(token);

  const handleClick = () => {
    setIsLogin(true);
  };
  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary rounded"
        aria-label="Thirteenth navbar example"
      >
        <div className="container-fluid py-2">
          <Link
            className="navbar-brand col-lg-3 me-0 px-lg-5 d-sm-block"
            to="/"
          >
            <img
              className="img-fluid"
              src="/images/logo.png"
              alt="logo"
              style={{ width: "90px", borderRadius: "50%" }}
            />
            <span className="text-success fw-bold">DonateFood</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample11"
            aria-controls="navbarsExample11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-lg-flex gap-4 justify-content-end"
            id="navbarsExample11"
          >
            <ul className="navbar-nav col-lg-9 d-lg-flex justify-content-lg-end">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/howitwork">
                  How It Works
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/donate">
                  Donate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/volunteer">
                  Volunteer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-lg-flex justify-content-lg-end">
              {token && user ? (
                <ProfileIcon />
              ) : (
                <Link
                  className="btn btn-success"
                  onClick={handleClick}
                  to="/login"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

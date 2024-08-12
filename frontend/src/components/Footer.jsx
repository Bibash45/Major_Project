import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div class="footer container-fluid">
      <footer class="footer container d-flex justify-content-evenly row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5  m-auto">
        <div class="d-flex  align-items-center justify-content-center col mb-3 ">
          <Link
            to="/"
            class="d-flex flex-row flex-sm-column  mb-3 link-body-emphasis text-decoration-none"
          >
            <img
              className="img-fluid"
              src="/images/logo.png"
              alt="logo"
              style={{ width: "100px" }}
            />
            <h5 className="my-2">
              <span className="fw-bold text-light">DonateFood</span>
            </h5>
          </Link>
        </div>

        <div class="col mb-3 text-center">
          <h5>Company</h5>
          <ul class="nav flex-column pt-2">
            <li class="nav-item mb-2 ">
              <Link to="/" class="nav-link p-0 text-white fw-light">
                Home
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/about-us" class="nav-link p-0 text-white fw-light">
                About Us
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/howitwork" class="nav-link p-0 text-white fw-light">
                How It Works
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/donate" class="nav-link p-0 text-white fw-light">
                Donate
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/volunteer" class="nav-link p-0 text-white fw-light">
                Volunteer
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/contact" class="nav-link p-0 text-white fw-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div class="col mb-3 text-center">
          <h5>Telephone</h5>
          <ul class="nav flex-column pt-2">
            <li class="nav-item ">
              <Link to="#" class="nav-link p-0 text-white fw-light">
                Office:+012235
              </Link>
            </li>
            <li class="nav-item">
              <Link to="#" class="nav-link p-0 text-white fw-light">
                FAX:8945982
              </Link>
            </li>
          </ul>
        </div>

        <div class="col mb-3 text-center">
          <h5>Contact Us</h5>
          <ul className="nav d-flex flex-column">
            <li>
              <Link className="text-light fs-2" to="">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link className="text-light fs-2" to="">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link className="text-light fs-2" to="">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="align-items-center  text-white px-3">
        <div className="border-top text-white py-2">
          <p className="m-0 text-center">
            Copyright © 2022. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div className="hero">
      <h1 >"Together, we can make a difference."</h1>
      <p>Join us in our mission to redistribute surplus food to those in need.</p>
      <div className="button">
        <Link to="/donate" className="btn btn-sm btn-success">
          Donate Food
        </Link>
        <Link to="/request-food" className="btn btn-sm btn-outline-success">
          Request Food
        </Link>
      </div>
    </div>
  );
};

export default Hero;

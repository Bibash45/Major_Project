import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <Vision></Vision>
      <Mission />
    </>
  );
};

export default Home;

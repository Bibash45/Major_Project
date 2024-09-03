import React from "react";
import {Helmet} from "react-helmet";
import Hero from "../components/Hero";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Home - DonateFood</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Hero />
      <Sponsors />
      <Vision></Vision>
      <Mission />
    </>
  );
};

export default Home;

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
                <title>Homepage - DonateFood</title>
                <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" sizes="64x64" />

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

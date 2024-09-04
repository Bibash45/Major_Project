import React from "react";
import VolunteerComp from "../components/VolunteerComp";
import { Helmet } from "react-helmet";

const Volunteer = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Volunteer - DonateFood</title>
        <link
          rel="shortcut icon"
          href="/images/logo.png"
          type="image/x-icon"
          sizes="64x64"
        />

        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <VolunteerComp />
    </>
  );
};

export default Volunteer;

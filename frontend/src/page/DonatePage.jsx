import React, { useState } from "react";
import DonateComp from "../components/DonateComp";
import NoticeModal from "../components/NoticeModel";
import { Helmet } from "react-helmet";
const DonatePage = () => {
  const [showNotice, setShowNotice] = useState(true);

  const handleClose = () => setShowNotice(false);
  const handleAgree = () => {
    setShowNotice(false);
    // Proceed with the donation process
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Donate - DonateFood</title>
        <link
          rel="shortcut icon"
          href="/images/logo.png"
          type="image/x-icon"
          sizes="64x64"
        />

        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NoticeModal
        show={showNotice}
        handleClose={handleClose}
        handleAgree={handleAgree}
      />
      {!showNotice && <DonateComp />}
    </>
  );
};

export default DonatePage;

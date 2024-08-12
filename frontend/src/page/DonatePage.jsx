import React, { useState } from "react";
import DonateComp from "../components/DonateComp";
import NoticeModal from "../components/NoticeModel";
const DonatePage = () => {
  const [showNotice, setShowNotice] = useState(true);

  const handleClose = () => setShowNotice(false);
  const handleAgree = () => {
    setShowNotice(false);
    // Proceed with the donation process
  };
  return (
    <>
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

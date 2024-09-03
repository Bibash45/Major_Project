import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Login from "./page/Login.jsx";
import HowItWork from "./page/HowItWork.jsx";
import DonatePage from "./page/DonatePage.jsx";
import Volunteer from "./page/Volunteer.jsx";
import Dashboard from "./page/Dashboard.jsx";
import EditProfile from "./page/EditProfile.jsx";
import HelpPage from "./page/HelpPage.jsx";
import Contact from "./page/ContactPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Notfound from "./page/Notfound.jsx";
import Layout from "./components/Layout.jsx";
const MyRoute = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/howitwork" element={<HowItWork />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
};

export default MyRoute;

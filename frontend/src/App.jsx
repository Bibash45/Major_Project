import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./page/Home";
import About from "./page/About"
import Login from "./page/Login";
import HowItWork from "./page/HowItWork.jsx"
import DonatePage from "./page/DonatePage.jsx";
import Volunteer from "./page/Volunteer.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import Dashboard from "./page/Dashboard.jsx";
import Footer from "./components/Footer.jsx";
import EditProfile from "./page/EditProfile.jsx";
import HelpPage from "./page/HelpPage.jsx";
import Contact from "./page/ContactPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
const App = () => {

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/howitwork" element={<HowItWork />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </AuthProvider>
  );
};

export default App;

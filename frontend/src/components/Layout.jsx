import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Nav />
      {isPageLoading ? <Loading /> : <Outlet />} <Footer />
    </>
  );
};

export default Layout;

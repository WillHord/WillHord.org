import React, { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import HeaderContext from "./context";

const Layout = () => {
  const [headerProps, setHeaderProps] = useState({});

  return (
    <>
      <HeaderContext.Provider value={{ headerProps, setHeaderProps }}> {/* Corrected usage of Provider */}
        <Header {...headerProps}/>
        <Outlet />
        <Footer />
        <ScrollRestoration />
      </HeaderContext.Provider> 
    </>
  );
};

export default Layout;

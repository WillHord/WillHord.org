import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./components/footer";

const Layout = () => {
  return (
    <>
        <Outlet /> {/* This will render the current route's component */}
        <Footer />
        <ScrollRestoration />
    </>
  );
};

export default Layout;

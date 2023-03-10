import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import Login from "./Login";

const Layout = ({ children }) => {
  //   const { navbarMobile } = useSelector((state) => state.navbar);
  const router = useRouter();
  const urlpath = router.pathname;
  const { address } = useAccount();
  return (
    <div>
      <Navbar />
      <>
        {address || urlpath === "/" || urlpath === "/about" ? (
          <div>{children}</div>
        ) : (
          <Login />
        )}
        <Footer />
      </>
    </div>
  );
};
export default Layout;

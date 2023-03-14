import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png"
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link href="/">
        <Image src={logo} width={150} height={150} />
        </Link>
      </div>
      <div className="element-container">
        <div className="list-container">
          <li>Home</li>
          <li>Documents</li>
          <li>About</li>
          <li>Help & Support</li>
        </div>
        <div className="btn-container">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

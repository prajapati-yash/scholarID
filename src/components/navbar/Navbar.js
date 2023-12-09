import React from "react";
import "../../styles/navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  return (
    <div className="navbar-component sticky-top">
      <nav
        className={`navbar navbar-expand-lg navbar-light py-2 `}
        role="navigation"
      >
        <div className="container-fluid px-4 px-md-5 navbar ">
          <a className="d-flex navbar-brand" href="/">
            <h1>ScholarID</h1>
          </a>

          <button
            type="button"
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            data-bs-toggle="collapse"
            data-bs-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarRightAlignExample"
          >
            <ul className="d-lg-flex navbar-nav align-items-center mb-2 mb-lg-0 navbar-container">
              <li className="nav-item py-2 px-lg-2">
                <NavLink
                  className="nav-link px-1 p-0 d-flex align-items-center"
                  to="/"
                >
                  <span className="landing-navbar">Scholarships</span>
                </NavLink>
              </li>

              <li className="nav-item py-2 px-lg-2">
                <NavLink
                  className="nav-link px-1 p-0 d-flex align-items-center"
                  to="/profile"
                >
                  <span className="landing-navbar">Profile</span>
                </NavLink>
              </li>

              <li className="nav-item py-2 px-2">
                <ConnectButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

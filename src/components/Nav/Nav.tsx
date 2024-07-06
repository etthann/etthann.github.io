/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import Socials from "../Socials/Socials";

export default function Nav() {
  const location = useLocation();

  const handleLinkClick = (e: { preventDefault: () => void }, path: any) => {
    if (location.pathname === `/${path}`) {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark p-4 navbar-border rounded-bottom ">
      <Link className="text-light text-decoration-none nav-link" to="/">
        <span className="h4 font-weight-normal">Ethan Ieong</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="mx-auto ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex justify-content-between w-100">
            <ul className="navbar-nav mr-auto fs-5">
              <li className="nav-item me-4">
                <Link
                  className="nav-link text-light text-decoration-none"
                  to="/"
                  onClick={(e) => handleLinkClick(e, "/")}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item active me-4">
                <Link
                  className="nav-link text-light text-decoration-none"
                  to="/about"
                  onClick={(e) => handleLinkClick(e, "about")}
                >
                  About
                </Link>
              </li>
              <li className="nav-item active me-4">
                <Link
                  className="nav-link text-light text-decoration-none"
                  to="/experiences"
                  onClick={(e) => handleLinkClick(e, "experiences")}
                >
                  Experiences
                </Link>
              </li>
              <li className="nav-item active me-4">
                <Link
                  className="nav-link text-light text-decoration-none"
                  to="/projects"
                  onClick={(e) => handleLinkClick(e, "projects")}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-2">
        <Socials />
      </div>
    </nav>
  );
}

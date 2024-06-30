import React from "react";
import { Link } from "react-router-dom";
import ScrollToPage from "../Scroll";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 custom-nav rounded-bottom">
      <Link
        className="text-dark text-decoration-none"
        to="/"
        onClick={() => {
          ScrollToPage({ page: "top" });
        }}
      >
        <span className="h4 font-weight-normal">Ethan Ieong</span>
      </Link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="mx-auto ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active me-4">
              <Link
                className="text-dark text-decoration-none fs-5"
                to="about"
                onClick={() => {
                  ScrollToPage({ page: "about" });
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item active me-4">
              <Link
                className="text-dark text-decoration-none fs-5"
                to="projects"
                onClick={() => {
                  ScrollToPage({ page: "projects" });
                }}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

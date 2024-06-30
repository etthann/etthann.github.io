import React from "react";
import { Link } from "react-router-dom";
import ScrollToPage from "../Scroll";

export default function Nav() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light p-3 custom-nav rounded-bottom">
  <div className="d-flex justify-content-between w-100">
    <ul className="navbar-nav">
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
      <li className="nav-item active me-4">
        <Link
          className="text-dark text-decoration-none fs-5"
          to="contact"
          onClick={() => {
            ScrollToPage({ page: "contact" });
          }}
        >
          Contact Me
        </Link>
      </li>
    </ul>
    <div>
      <Link className="text-dark text-decoration-none fs-5" to="new-page">New Page</Link>
      <!-- Add more elements here as needed -->
    </div>
  </div>
</nav>
  );
}

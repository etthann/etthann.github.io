import React from "react";
import { Link } from "react-router-dom";
import ScrollToPage from "../Scroll";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4 nav-hover">
      <Link
        className="text-dark text-decoration-none"
        to="/"
        onClick={() => {
          ScrollToPage({ page: "top" });
        }}
      >
        <span className="h4 font-weight-normal">Ethan Ieong</span>
      </Link>
      <div className="mx-auto">
        <Link
          className="text-dark text-decoration-none"
          to="about"
          onClick={() => {
            ScrollToPage({ page: "top" });
          }}
        >
          <span className="h4 font-weight-normal">About</span>
        </Link>
      </div>
    </nav>
  );
}

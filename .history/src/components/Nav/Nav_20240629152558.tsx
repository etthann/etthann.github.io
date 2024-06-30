import React from "react";
import { Link } from "react-router-dom";
import ScrollToPage from "../Scroll";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4 custom-nav">
      <Link
        className="text-dark text-decoration-none"
        to="/"
        onClick={() => {
          ScrollToPage({ page: "top" });
        }}
      >
        <span className="h4 font-weight-normal">Ethan Ieong</span>
      </Link>
      <div className="mx-auto ">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
      </div>
    </nav>
  );
}

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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
      </div>
    </nav>
  );
}

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
             <Link className="text-dark text-decoration-none" to="about" onClick={}>

             </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

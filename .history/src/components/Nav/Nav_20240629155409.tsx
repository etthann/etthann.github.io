/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
import ScrollToPage from "../Scroll";
import sanitizeUrl from "../SanitizeUrl";


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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active me-4">
                <Link
                  className="text-dark text-decoration-none fs-5"
                  to="/"
                  onClick={() => {
                    ScrollToPage({ page: "top" });
                  }}
                >
                  Home
                </Link>
              </li>

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
          </div>
        </div>
      </div>

      <div>
        <a
          href={
            process.env.INSTAGRAM_LINK
              ? sanitizeUrl(process.env.INSTAGRAM_LINK)
              : "#"
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          Instagram
        </a>
        <a
          href={
            process.env.TWITTER_LINK
              ? sanitizeUrl(process.env.TWITTER_LINK)
              : "#"
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>
        <a
          href={
            process.env.FACEBOOK_LINK
              ? sanitizeUrl(process.env.FACEBOOK_LINK)
              : "#"
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}

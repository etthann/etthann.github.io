import React from "react";
import "./Footer.css";
import Initials from "../../photos/Home/monogram-inital.svg";
import Socials from "../Socials/Socials";

export default function Footer() {
  return (
    <div className="container-fluid bg-dark gx-0">
      <div className="footer-container row justify-content-center text-center">
        {/* Use 'col' to wrap each item for horizontal alignment */}
        <div className="col-md-5">
          <div className="circle-image">
            <img src={Initials} alt="rocket moon" />
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center text-light creator">
          <span>Created By Ethan Ieong</span>
        </div>
        <div className="col d-flex align-items-center footer-socials">
          <span><Socials/></span>
        </div>
      </div>
    </div>
  );
}
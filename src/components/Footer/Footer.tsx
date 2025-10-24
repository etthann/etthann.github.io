import React, { useEffect } from "react";
import "./Footer.css";
import Socials from "../Socials/Socials";
import observer from "../Observer/Observer";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  useEffect(() => {
    // Select both text and images for animation
    const hiddenImageElements = document.querySelectorAll(".footer-container"); 

    // Observe image elements
    hiddenImageElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenImageElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div className="container-fluid bg-dark gx-0 footer-container">
      <div className=" row justify-content-center text-center">
        {/* Use 'col' to wrap each item for horizontal alignment */}
        <div className="col-md-4 d-flex align-items-center text-light creator fs-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            className="bi bi-c-circle"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
          </svg>

          <span className="fs-6 offset-1"> {currentYear} Ethan Ieong</span>
        </div>
        <div className="col-md-4 d-flex align-items-center text-light creator fs-6">
          <span className="offset-3">Created By Ethan Ieong</span>
        </div>
        <div className="col d-flex align-items-center footer-socials">
          <span>
            <Socials />
          </span>
        </div>
      </div>
    </div>
  );
}

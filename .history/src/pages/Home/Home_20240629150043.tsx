/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import ScrollToPage from "../../components/Scroll";

const Home: React.FC = () => {
  return (
    <div className=" container-fluid overflow-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
        <Link className="text-dark text-decoration-none" to="/" onClick={() => {ScrollToPage({ page: "top" });}}>
          <h2>Ethan Ieong</h3>
        </Link>
        
      </nav>
    </div>
  );
};

export default Home;

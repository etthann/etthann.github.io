import React from "react";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <div className="container-fluid">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Portfolio" />
        <meta name="keywords" content="React, Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <nav className="navbar"></nav>

    </div>
  );
};

export default Home;

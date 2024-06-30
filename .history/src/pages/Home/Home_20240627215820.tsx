import React from "react";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <div className="container-fluid">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="This is the description of the Home Page" />
        <meta name="keywords" content="example, home page, react helmet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    </div>
  );
};

export default Home;

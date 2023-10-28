import React from "react";
import Navigation from "../components/Navigation.jsx";
import Logo from "../components/Logo.jsx";
import Countries from "../components/Countries.jsx";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Countries />
    </div>
  );
};

export default Home;

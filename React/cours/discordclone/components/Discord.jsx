import React from "react";
import ServerList from "./ServerList";
import Friends from "./Friends";

const Discord = () => {
  return (
    <div className="app">
      <header>
        <p>discord</p>
        <div className="windows">
          <i className="fa-solid fa-minus"></i>
          <i className="fa-regular fa-square"></i>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </header>
      <div className="container">
        <div className="container-left">
          <ServerList />
        </div>
        <div className="container-right">
          <Friends />
        </div>
      </div>
    </div>
  );
};

export default Discord;

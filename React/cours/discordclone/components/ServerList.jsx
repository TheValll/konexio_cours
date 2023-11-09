import React, { useState, useEffect } from "react";
import axios from "axios";

const ServerList = () => {
  const [serverList, setServerList] = useState([]);

  const getServerListing = () => {
    axios
      .get("https://thevalll.github.io/discordclone-database/db.json")
      .then((res) => {
        setServerList(res.data.server);
      });
  };

  useEffect(() => getServerListing(), []);

  return (
    <div className="server-list">
      <img
        src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-4-1.png"
        alt="friends logo"
        height="50px"
      />
      {serverList.map((server, index) => {
        return (
          <img
            src={server.server_pfp}
            alt={`logo du server ${server.server_name}`}
            height="50px"
            key={index}
          />
        );
      })}
      <i className="fa-solid fa-plus"></i>
    </div>
  );
};

export default ServerList;

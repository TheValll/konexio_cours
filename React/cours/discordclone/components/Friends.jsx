import React, { useState, useEffect } from "react";
import axios from "axios";

const Friends = () => {
  const [directMessage, setDirectMessage] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentMessageDisplay, setCurrentMessageDisplay] = useState(null);
  const [currentMessageContent, setCurrentMessageContent] = useState(null);

  const getServerListing = () => {
    axios
      .get("https://thevalll.github.io/discordclone-database/db.json")
      .then((res) => {
        setDirectMessage(res.data.direct_message);
        setUserInfo(res.data.user[0]);
      });
  };

  const getCurrentMessage = () => {
    axios
      .get("https://thevalll.github.io/discordclone-database/db.json")
      .then((res) => {
        const messageWithCurrentPseudo = res.data.direct_message.find(
          (message) => message.pseudo === currentMessage
        );

        if (messageWithCurrentPseudo) {
          console.log(messageWithCurrentPseudo);
          setCurrentMessageDisplay(messageWithCurrentPseudo);
        } else {
          return;
        }
      });
  };

  useEffect(() => getServerListing(), []);
  useEffect(() => getCurrentMessage(), [currentMessage]);

  return (
    <div className="friends">
      <div className="friends-left">
        <input type="text" placeholder="Find a conversation" />
        <p>DIRECT MESSAGES</p>
        <div className="messages">
          {directMessage.map((message, index) => {
            return (
              <div
                className={`message`}
                key={index}
                onClick={() => setCurrentMessage(message.pseudo)}
              >
                <img src={message.pfp} alt="pfp" height="40px" />
                <p className="pseudo">{message.pseudo}</p>
              </div>
            );
          })}
        </div>
        <div className="user">
          <img src={userInfo.pfp} alt="me" height="40px" />
          <div className="info">
            <p>{userInfo.pseudo}</p>
            <p>{userInfo.custom_statut}</p>
          </div>
          <div className="settings-audio">
            <i className="fa-solid fa-microphone-slash"></i>
            <i className="fa-solid fa-volume-xmark"></i>
            <i className="fa-solid fa-gear"></i>
          </div>
        </div>
      </div>
      <div className="friends-right">
        <div className="messages">
          {currentMessageDisplay ? (
            currentMessageDisplay.messages.map((messages, index) => {
              return (
                <div className="message" key={index}>
                  <div className="from-info">
                    {messages.from === userInfo.pseudo ? (
                      <img src={userInfo.pfp} alt="current user" />
                    ) : (
                      <img src={currentMessageDisplay.pfp} alt="current user" />
                    )}
                    <p className="message-pseudo">{messages.from}</p>
                    <p className="message-at">{messages.at}</p>
                  </div>
                  <p className="message-content">{messages.content}</p>
                </div>
              );
            })
          ) : (
            <p>No messages select a conversation</p>
          )}
          {currentMessageDisplay ? (
            <div className="search">
              <input
                type="text"
                placeholder={`Message @${currentMessage}`}
                className="input-message"
                onChange={(e) => setCurrentMessageContent(e.target.value)}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Friends;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Friends = () => {
  const [directMessage, setDirectMessage] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentMessageContent, setCurrentMessageContent] = useState("");
  const [currentMessageDisplay, setCurrentMessageDisplay] = useState(null);

  const postMessage = () => {
    if (!userInfo || currentMessageContent === "") {
      alert("Please write something or user info is missing");
      return;
    }

    const newMessage = {
      from: userInfo.pseudo,
      content: currentMessageContent,
      at: new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setCurrentMessageDisplay((prevDisplay) =>
      prevDisplay
        ? {
            ...prevDisplay,
            messages: [...prevDisplay.messages, newMessage],
          }
        : prevDisplay
    );

    setCurrentMessageContent("");
  };

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
          setCurrentMessageDisplay(messageWithCurrentPseudo);
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
        <div className="messages-list">
          {directMessage.map((message, index) => (
            <div
              className={`message ${
                message.pseudo === currentMessage ? "active" : ""
              }`}
              key={index}
              onClick={() => setCurrentMessage(message.pseudo)}
            >
              <img src={message.pfp} alt="pfp" height="40px" />
              <p className="pseudo">{message.pseudo}</p>
            </div>
          ))}
        </div>
        {userInfo && (
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
        )}
      </div>
      <div className="friends-right">
        {currentMessageDisplay && currentMessageDisplay.messages && (
          <div className="messages">
            <div className="conversation">
              <div className="messages-container">
                {currentMessageDisplay.messages.map((message, index) => (
                  <div className="message" key={index}>
                    <div className="from-info">
                      <img
                        src={
                          message.from === userInfo.pseudo
                            ? userInfo.pfp
                            : currentMessageDisplay.pfp
                        }
                        alt="user pfp"
                      />
                      <p className="message-pseudo">{message.from}</p>
                      <p className="message-at">{message.at}</p>
                    </div>
                    <p className="message-content">{message.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="message-input">
              <input
                type="text"
                placeholder={`Message @${currentMessage}`}
                className="input-message"
                value={currentMessageContent}
                onChange={(e) => setCurrentMessageContent(e.target.value)}
              />
              <button
                className="submit-message"
                onClick={(e) => {
                  e.preventDefault();
                  postMessage();
                }}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;

import React, { useState } from "react";

const Card = ({ el }) => {
  let id = el.id;
  const convertDate = (dateString) => {
    const dateParts = dateString.split("-");
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
  };

  const addFavorite = () => {
    save(saveInfos);
    alert("Your film is added on your favorites films list");
  };

  const [personalNote, setPersonalNote] = useState(0);

  const personalStars = [];

  for (let i = 0; i < 5; i++) {
    let style = { cursor: "pointer" };
    if (i < personalNote) {
      style = { color: "rgb(252, 213, 63)", cursor: " pointer" };
    }
    personalStars.push(
      <i
        className="fa-solid fa-star"
        onClick={() => setPersonalNote(i + 1)}
        key={i}
        style={style}
      />
    );
  }

  const saveInfos = {
    img: `https://image.tmdb.org/t/p/w500${el.poster_path}`,
    title: el.original_title,
    date: convertDate(el.release_date),
    note: Number(el.vote_average).toFixed(1),
    synopsis: el.overview,
    personalNote: personalNote,
  };

  const save = (obj) => {
    const jsonString = JSON.stringify(obj);
    localStorage.setItem(id, jsonString);
  };

  return (
    <div className="card">
      <div className="card-container">
        <div className="img-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
            alt={el.original_title}
            height="250px"
          />
        </div>
        <p className="title">{el.original_title}</p>
        <p className="date">Sortie le : {convertDate(el.release_date)}</p>
        <p className="note">{Number(el.vote_average).toFixed(1)} / 10 ⭐</p>
        <div className="user-vote">
          <p>Your vote :</p>
          {personalStars}
        </div>
        {el.overview ? <p className="titleSynopsis">Synopsis</p> : ""}
        <p className="synopsis">{el.overview}</p>
        <button id="fav-btn" onClick={() => addFavorite()}>
          Add on your favorites films list
        </button>
      </div>
    </div>
  );
};

export default Card;

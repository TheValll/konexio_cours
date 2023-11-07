import React from "react";

const Card = ({ el }) => {
  let id = el.id;
  const convertDate = (dateString) => {
    const dateParts = dateString.split("-");
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
  };

  const saveInfos = {
    img: `https://image.tmdb.org/t/p/w500${el.poster_path}`,
    title: el.original_title,
    date: convertDate(el.release_date),
    note: Number(el.vote_average).toFixed(1),
    synopsis: el.overview,
  };

  const save = (obj) => {
    const jsonString = JSON.stringify(obj);
    localStorage.setItem(id, jsonString);
  };

  const addFavorite = () => {
    save(saveInfos);
    alert("Votre film de merde est enrengister dans votre liste de depressif");
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
        <p className="titleSynopsis">Synopsis</p>
        <p className="synopsis">{el.overview}</p>
        <button id="fav-btn" onClick={() => addFavorite()}>
          Ajouter a mes films de merde
        </button>
      </div>
    </div>
  );
};

export default Card;

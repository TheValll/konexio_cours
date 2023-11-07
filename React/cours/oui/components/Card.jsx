import React from "react";

const Card = ({ el }) => {
  console.log(el);
  const convertDate = (dateString) => {
    const dateParts = dateString.split("-");
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
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
        <p className="note">{el.vote_average} / 10 ⭐</p>
        <p className="titleSynopsis">Synopsis</p>
        <p className="synopsis">{el.overview}</p>
      </div>
    </div>
  );
};

export default Card;

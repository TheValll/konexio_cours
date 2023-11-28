import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

const Cards = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className="cards">
      {movies && (
        <div className="cards-container">
          {movies.map((movie) => (
            <Image
              src={movie.backdrop_path}
              width={500}
              height={500}
              alt={movie.title}
              key={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;

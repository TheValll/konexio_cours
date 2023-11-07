import React, { useState } from "react";
import Card from "@/components/Card";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [userInput, setUserInput] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=09170afcec060f207b49c5a94e126386&query=${userInput}&language=fr-FR`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      alert("No match found");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <h1>The Movie Search Website De Fou Furieux T'as Vu ?</h1>
        <div className="btn-container">
          <input
            type="text"
            placeholder="PLACE TON FILM ICI CONNARD"
            id="input"
            onChange={(e) => setUserInput(e.target.value)}
          />
          <input
            type="submit"
            value="Recherche ton film de merde"
            id="submit"
            onClick={() => fetchData()}
          />
        </div>
      </div>
      <div className="cards-container">
        {movies.map((el, index) => (
          <Card el={el} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;

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

  let [index, setIndex] = useState(1);
  const randomImg = function () {
    return setIndex(Math.floor(Math.random() * 22 + 1));
  };

  return (
    <div className="app">
      <div className="search">
        <img
          src={`/pfp/${index}.jpg`}
          alt="user pfp"
          className="userImg"
          onClick={() => randomImg()}
        />
        <p>
          Click me <i class="fa-solid fa-arrow-up"></i>
        </p>
        <h1>The Movie Search Website</h1>
        <div className="btn-container">
          <input
            type="text"
            placeholder="Enter a film"
            id="input"
            onChange={(e) => setUserInput(e.target.value)}
          />
          <input
            type="submit"
            value="Research your film"
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

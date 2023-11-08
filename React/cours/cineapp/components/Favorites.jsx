import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      const favoriteElements = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = localStorage.getItem(key);
        if (item) {
          try {
            const movie = JSON.parse(item);
            favoriteElements.push(
              <div className="card" key={key}>
                <div className="card-container">
                  <div className="img-container">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.img}`}
                      alt={movie.title}
                      height="250px"
                    />
                  </div>
                  <p className="title">
                    {movie.title || "Title not available"}
                  </p>
                  <p className="date">Sortie le : {movie.date}</p>
                  <p className="note">{movie.note} / 10 ⭐</p>
                  <div className="user-vote">
                    {movie.personalNote ? (
                      <p>
                        Your vote : {Number(movie.personalNote) * 2} / 10 ⭐
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  {movie.synopsis ? (
                    <p className="titleSynopsis">Synopsis</p>
                  ) : (
                    ""
                  )}
                  <p className="synopsis">{movie.synopsis}</p>
                  <button id="fav-btn" onClick={() => removeFavorite(key)}>
                    Delete from your list
                  </button>
                </div>
              </div>
            );
          } catch (e) {
            console.error("Error parsing movie data from localStorage", e);
          }
        }
      }
      setFavorites(favoriteElements);
    };

    loadFavorites();
  }, []);

  const removeFavorite = (key) => {
    localStorage.removeItem(key);
    location.reload();
  };

  return (
    <div className="cards-container">
      {favorites.length > 0 ? (
        favorites
      ) : (
        <p className="favorite-title">Aucun favori ajouté.</p>
      )}
    </div>
  );
};

export default Favorites;

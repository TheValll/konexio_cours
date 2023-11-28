import { useDispatch } from "react-redux";
import { setMoviesData } from "@/feature/movies.slice";
import Cards from "@/components/cards";

const api = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=09170afcec060f207b49c5a94e126386&query=avengers&language=fr-FR`
      );
      const data = await response.json();
      dispatch(setMoviesData(data.results));
    } catch (error) {
      console.log("Fetch error: ", error);
      alert("No match found");
    }
  };

  return (
    <div>
      <h2>La data</h2>
      <button onClick={fetchData}>Oui</button>
      <Cards />
    </div>
  );
};

export default api;

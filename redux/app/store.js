import { configureStore } from "@reduxjs/toolkit";
import movies from "@/feature/movies.slice";

export default configureStore({
  reducer: {
    movies: movies,
  },
});

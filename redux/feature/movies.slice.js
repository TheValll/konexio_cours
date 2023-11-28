import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: null,
  },
  reducers: {
    setMoviesData: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { setMoviesData } = moviesSlice.actions;
export default moviesSlice.reducer;

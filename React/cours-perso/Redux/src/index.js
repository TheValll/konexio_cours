import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { configureStore } from "@reactjs/toolkit";
import App from "./App";
import "./styles/index.scss";

const store = configureStore({
  reducer: rootReducer,
  devTools,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

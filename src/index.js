import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { FavouriteContextProvider } from "./store/FavouriteContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavouriteContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavouriteContextProvider>
  </React.StrictMode>
);

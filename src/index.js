import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { FavouriteContextProvider } from "./context/FavouriteContextProvider";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <FavouriteContextProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </FavouriteContextProvider> */}
  </Provider>
  // </React.StrictMode>
);

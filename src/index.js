import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import { ContextApi } from "./components/ContextApi";
import firebaseConfig from "./firebase.config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ContextApi>
      <App />
    </ContextApi>
  </Provider>
);

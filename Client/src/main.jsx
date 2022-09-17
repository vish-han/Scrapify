import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StateProvider from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StateProvider>
      <App />
    </StateProvider>
  </BrowserRouter>
);

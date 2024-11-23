// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

// Import global CSS if needed
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Matches the <div id="root"> in your public/index.html
);

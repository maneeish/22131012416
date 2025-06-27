// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure App.jsx exists
import "./style.css"; // Optional

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

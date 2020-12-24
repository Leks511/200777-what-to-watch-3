import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const FILM_DETAILS = {
  title: `Some film`,
  genre: `Super жанр!`,
  year: `10 октября`
};

ReactDOM.render(
    <App filmDetails={FILM_DETAILS} />,
    document.getElementById(`root`)
);

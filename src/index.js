import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const FILM_DETAILS = {
  title: `Some film`,
  genre: `Super жанр!`,
  year: `10 октября`
};

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App
      filmDetails={FILM_DETAILS}
      movies={movies}
    />,
    document.getElementById(`root`)
);

import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const FILM_DETAILS = {
  title: `Some film`,
  genre: `Super жанр!`,
  year: `10 октября`
};

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <App
          filmDetails={FILM_DETAILS}
          movies={movies}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

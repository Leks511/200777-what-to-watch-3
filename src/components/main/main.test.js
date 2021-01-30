import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const FILM_DETAILS = {
  title: `Some film`,
  genre: `Super жанр!`,
  year: `10 октября`
};

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          filmDetails={FILM_DETAILS}
          movies={movies}
          onMovieHeaderClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

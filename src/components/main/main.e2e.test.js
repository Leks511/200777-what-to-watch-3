import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const FILM_DETAILS = {
  title: `Some film`,
  genre: `Super жанр!`,
  year: `10 октября`
};

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie headers be pressed`, () => {
  const onMovieHeaderClick = jest.fn();

  const main = shallow(
      <Main
        filmDetails={FILM_DETAILS}
        movies={movies}
        onMovieHeaderClick={onMovieHeaderClick}
      />
  );

  main.find(`h3.small-movie-card__title`).forEach((node) => {
    node.props().onClick();
  });

  expect(onMovieHeaderClick.mock.calls.length).toBe(movies.length);
});

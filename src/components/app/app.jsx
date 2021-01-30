import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {filmDetails, movies, onMovieHeaderClick} = props;

  return (
    <Main
      filmDetails={filmDetails}
      movies={movies}
      onMovieHeaderClick={onMovieHeaderClick}
    />
  );
};

App.propTypes = {
  filmDetails: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  onMovieHeaderClick: PropTypes.func.isRequired,
};

export default App;

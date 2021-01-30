import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {filmDetails, movies} = props;

  return (
    <Main
      filmDetails={filmDetails}
      movies={movies}
    />
  );
};

App.propTypes = {
  filmDetails: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired,
};

export default App;

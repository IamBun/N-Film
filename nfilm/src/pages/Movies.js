import React from "react";
import Banner from "../components/Home/Banner/Banner.js";
import MoviesContainer from "../components/Movies/MoviesContainer.js";

const Movies = (props) => {
  return (
    <div>
      <Banner requests={props.requests}></Banner>
      <MoviesContainer requests={props.requests}></MoviesContainer>
    </div>
  );
};

export default Movies;

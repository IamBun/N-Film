import React from "react";
import Banner from "../components/Home/Banner/Banner.js";
import TvShowsContainer from "../components/TvShows/TvShowsContainer.js";

const TvShows = (props) => {
  return (
    <div>
      <Banner requests={props.requests}></Banner>
      <TvShowsContainer requests={props.requests}></TvShowsContainer>
    </div>
  );
};

export default TvShows;

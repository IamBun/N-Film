import MoviePoster from "../Home/homeContainer/MoviePoster";
import classes from "./tvShowsContainer.module.css";

const TvShowsContainer = (props) => {
  return (
    <div className={classes.tvContainer}>
      <div>
        <h2>Tv Mystery</h2>
        <MoviePoster url={props.requests.fetchTvMystery} />
      </div>
      <div>
        <h2>Tv Family</h2>
        <MoviePoster url={props.requests.fetchTvFamily} />
      </div>
      <div>
        <h2>Tv Animations</h2>
        <MoviePoster url={props.requests.fetchTvAnimation} />
      </div>
      <div>
        <h2>Tv Drama</h2>
        <MoviePoster url={props.requests.fetchTvDrama} />
      </div>
    </div>
  );
};

export default TvShowsContainer;

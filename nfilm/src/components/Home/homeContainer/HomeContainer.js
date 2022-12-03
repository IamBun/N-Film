import MoviePoster from "./MoviePoster";
import classes from "./homeContainer.module.css";

const HomeContainer = (props) => {
  return (
    <div className={classes.homeContainer}>
      <div>
        <h2>Top Rated</h2>
        <MoviePoster url={props.requests.fetchTopRated} />
      </div>
      <div>
        <h2>Action Movies</h2>
        <MoviePoster url={props.requests.fetchActionMovies} />
      </div>
      <div>
        <h2>Horror Movies</h2>
        <MoviePoster url={props.requests.fetchHorrorMovies} />
      </div>
      <div>
        <h2>Romantic Movies</h2>
        <MoviePoster url={props.requests.fetchRomanceMovies} />
      </div>
    </div>
  );

};

export default HomeContainer;

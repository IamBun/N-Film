import MoviePoster from "../Home/homeContainer/MoviePoster";
import classes from "./moviesContainer.module.css";

const MoviesContainer = (props) => {
  return (
    <div className={classes.moviesContainer}>
      <div>
        <h2>Action Movies</h2>
        <MoviePoster url={props.requests.fetchActionMovies} />
      </div>
      <div>
        <h2>Horror Movies</h2>
        <MoviePoster url={props.requests.fetchHorrorMovies} />
      </div>
      <div>
        <h2>Documentary Movies</h2>
        <MoviePoster url={props.requests.fetchDocumentaries} />
      </div>
      <div>
        <h2>Comedy Movies</h2>
        <MoviePoster url={props.requests.fetchComedyMovies} />
      </div>
    </div>
  );
};

export default MoviesContainer;

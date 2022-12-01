import classes from "./moviePoster.module.css";
import { useEffect, useState } from "react";
import Image from "../../UI/Image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import MovieDetail from "./movieDetail/MovieDetail";

const MoviePoster = (props) => {
  const [MoviePoster, setMoviePoster] = useState([]);
  const [movieShow, setMovieShow] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);
  const [isHover, setIsHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [idFilm, setIdFilm] = useState();

  const fetchMoviePoster = async function () {
    try {
      const res = await fetch(`https://api.themoviedb.org/3${props.url}`);
      if (!res.ok) {
        throw new Error("loading failed !");
      }
      const data = await res.json();
      setMoviePoster(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMoviePoster();
  }, []);

  useEffect(() => {
    const getMovieShow = () => {
      setMovieShow(MoviePoster.slice(startIndex, endIndex));
    };
    getMovieShow();
  }, [MoviePoster, startIndex, endIndex]);

  const rightClick = () => {
    setStartIndex(startIndex + 6);
    setEndIndex(endIndex + 6);
  };

  const leftClick = () => {
    setStartIndex(startIndex - 6);
    setEndIndex(endIndex - 6);
  };

  const closeModal = (e) => {
    setShowModal(false);
    document.body.style.overflowY = "scroll";
  };

  return (
    <div
      className={classes.moviePoster}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      {startIndex > 5 && (
        <FaAngleLeft
          className={
            !isHover ? `${classes.leftIcon}` : `${classes.leftIconActive}`
          }
          onClick={leftClick}
        />
      )}
      {movieShow.map((ele) => {
        //duyet qua hien thi tung poster
        return (
          <div className={classes.poster} key={ele.id}>
            <Image
              className={classes.poster_path}
              src={`https://image.tmdb.org/t/p/original${ele.poster_path}`}
              onClick={() => {
                console.log(ele);
                setIdFilm(ele.id);
                setShowModal(true);
                document.body.style.overflowY = "hidden";
              }}
            />
            <p>{ele.name}</p>
          </div>
        );
      })}
      {endIndex < MoviePoster.length && (
        <FaAngleRight
          className={
            !isHover ? `${classes.rightIcon}` : `${classes.rightIconActive}`
          }
          onClick={rightClick}
        />
      )}
      {showModal && (
        <MovieDetail id={idFilm} onClick={closeModal} movie={MoviePoster} />
      )}
    </div>
  );
};

export default MoviePoster;

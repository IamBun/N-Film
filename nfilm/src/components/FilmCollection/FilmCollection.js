import classes from "./filmCollection.module.css";
import Image from "../UI/Image";
import { useEffect, useState } from "react";
import img from "../../assets/logo.png";
import MovieDetail from "../Home/homeContainer/movieDetail/MovieDetail";

const FilmCollection = (props) => {
  const [film, setFilm] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [idFilm, setIdFilm] = useState();

  useEffect(() => {
    setFilm(props.filmCollection.results);
  });

  const closeModal = (e) => {
    setShowModal(false);
    document.body.style.overflowY = "scroll";
  };

  return (
    <>
      <div className={classes.filmCollection}>
        {film &&
          film.map((ele) => (
            <div
              className={classes.filmItem}
              onClick={() => {
                setShowModal(true);
                setIdFilm(ele.id);
                document.body.style.overflowY = "hidden";
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/original${ele.poster_path}`}
                fallback={img}
              ></Image>
              <h3>{ele.original_title}</h3>
            </div>
          ))}
      </div>
      {showModal && (
        <MovieDetail id={idFilm} onClick={closeModal} movie={film} />
      )}
    </>
  );
};

export default FilmCollection;

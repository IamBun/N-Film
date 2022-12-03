import classes from "./filmCollection.module.css";
import Image from "../UI/Image";
import { useEffect, useState } from "react";
import img from "../../assets/logo.png";
import MovieDetail from "../Home/homeContainer/movieDetail/MovieDetail";

const FilmCollection = (props) => {
  //show Film va ten phim
  const [film, setFilm] = useState([]);
  const [showModal, setShowModal] = useState(false); //show Modal khi click vao
  const [idFilm, setIdFilm] = useState(); //lay id phim

  useEffect(() => {
    setFilm(props.filmCollection.results);
  }, [props]);

  const closeModal = (e) => {
    // dong modal
    setShowModal(false);
    document.body.style.overflowY = "scroll"; //hien thi lai thanh scroll cua trinh duyet
  };

  return (
    <>
      <div className={classes.filmCollection}>
        {film &&
          film.map((ele, index) => (
            <div
              key={index}
              className={classes.filmItem}
              onClick={() => {
                setShowModal(true);
                setIdFilm(ele.id);
                document.body.style.overflowY = "hidden"; //an thanh scroll cua trinh duyet khi show modal
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

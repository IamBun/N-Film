import classes from "./genres.module.css";
import { genres } from "../const/CONST";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY } from "../const/CONST";
import FilmCollection from "../FilmCollection/FilmCollection";
const Genres = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [idGenres, setIdGenres] = useState(params.genresId);
  const [genresName, setGenresName] = useState();
  const [filmRender, setFilmRender] = useState();
  const [showInput, setShowInput] = useState(false);

  const fetchGenresFilm = async function () {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${params.genresId}`
      );
      if (!res.ok) {
        throw new Error("Loading failed !");
      }

      const data = await res.json();
      setFilmRender(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchGenresFilm();
  }, [params.genresId]);

  //click vao thi chuyen trang den genres/idGenres
  const submitForm = (e) => {
    e.preventDefault();
    navigate(`/genres/${idGenres}`);
  };

  //   window.addEventListener("click", () => {
  //     setShowInput(false);
  //   });

  const showInputPopup = () => {
    setShowInput(!showInput);
  };

  return (
    <div className={classes.genres}>
      <form onSubmit={submitForm} className={classes.form}>
        <label className={classes.filterLabel}>Genres </label>
        <div onClick={showInputPopup} className={classes.inputPopup}>
          {!showInput && (
            <label>{genresName ? genresName : "Choose genres ..."}</label>
          )}
          {showInput &&
            genres.map((ele, index) => (
              <label
                key={index}
                onClick={() => {
                  setGenresName(ele.name);
                  setIdGenres(ele.id);
                }}
              >
                {ele.name}
              </label>
            ))}
        </div>
        <div className={classes.getFilmBtn} onClick={submitForm}>
          <label>Get Film</label>
        </div>
      </form>
      {filmRender && <FilmCollection filmCollection={filmRender} />}
    </div>
  );
};

export default Genres;

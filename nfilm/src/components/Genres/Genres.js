import classes from "./genres.module.css";
import { genres } from "../const/CONST";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY } from "../const/CONST";
import FilmCollection from "../FilmCollection/FilmCollection";
const Genres = () => {
  //hien thi the loai phim
  const navigate = useNavigate();
  const params = useParams();
  const [idGenres, setIdGenres] = useState();
  const [genresName, setGenresName] = useState();
  const [filmRender, setFilmRender] = useState();
  const [showInput, setShowInput] = useState(false);

  const fetchGenresFilm = async function () {
    // get API phim theo the loai
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${params.genresId}`
      );
      if (!res.ok) {
        throw new Error("Loading failed !");
      }

      const data = await res.json();
      setFilmRender(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchGenresFilm();
  }, [params.genresId]);

  const onChangehandler = (e) => {
    //click chon the loai thi luu vao bien input
    setGenresName(e.target.value);
  };

  const showInputPopup = () => {
    //tat mo bang list the loai phim
    setShowInput(!showInput);
  };

  const filterGenres = () => {
    // chuyen trang den /: the loai phim
    navigate(`/genres/${idGenres}`);
  };

  return (
    <div className={classes.genres}>
      <form className={classes.form}>
        <div className={classes.filterLabel}>
          <label className={classes.filterLabel}>Genres </label>
        </div>
        <div onClick={showInputPopup} className={classes.inputPopup}>
          {!showInput && ( //luc moi vao chua chon the loai, khong hien thi list de chon
            <input
              defaultValue="Choose genres..."
              value={genresName}
              onChange={onChangehandler}
            />
          )}
          {showInput && ( //hien thi list genres de chon
            <div className={classes.listGenres}>
              {genres.map((ele, index) => (
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
          )}
        </div>
        <div className={classes.getFilmBtn} onClick={filterGenres}>
          <label>Filter</label>
        </div>
      </form>
      {filmRender && <FilmCollection filmCollection={filmRender} />}
    </div>
  );
};

export default Genres;

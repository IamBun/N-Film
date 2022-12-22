import classes from "./genres.module.css";
import { genres } from "../const/CONST";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { API_KEY } from "../const/CONST";
import FilmCollection from "../FilmCollection/FilmCollection";
import { genres as genresArr } from "../const/CONST";

const Genres = () => {
  //hien thi the loai phim
  const navigate = useNavigate();
  const params = useParams();
  const [idGenres, setIdGenres] = useState();
  const [genresName, setGenresName] = useState();
  const [filmRender, setFilmRender] = useState();
  const [showInput, setShowInput] = useState(false);
  const [totalPage, setTotalPage] = useState();
  if (!params.page) {
    params.page = 1;
  }

  useMemo(() => {
    if (params.genresId) {
      for (let key in genresArr) {
        if (genresArr[key].id === Number(params.genresId)) {
          setGenresName(genresArr[key].name);
        }
      }
    }
  }, []);

  const fetchGenresFilm = async function () {
    // get API phim theo the loai
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${
          params.genresId
        }&page=${params.page ? params.page : ""}`
      );
      if (!res.ok) {
        throw new Error("Loading failed !");
      }

      const data = await res.json();
      setFilmRender(data);
      setTotalPage(data.total_pages);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchGenresFilm();

    return () => {
      params.page = 1;
    };
  }, [params.genresId, params.page]);

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
      {/* action dieu huowng chuyen trang next, prev  */}
      {params.page && (
        <div className={classes.action}>
          {params.page > 1 && (
            <button
              onClick={() => {
                navigate(
                  `/genres/${params.genresId}/${Number(params.page) - 1}`
                );
                window.scrollTo({
                  top: 0,
                  behavior: `smooth`,
                });
              }}
            >
              Prev Page
            </button>
          )}

          {params.page >= 1 && params.page <= { totalPage } && (
            <span>
              Page {params.page} of {totalPage}
            </span>
          )}

          {params.page < totalPage && (
            <button
              onClick={() => {
                navigate(
                  `/genres/${params.genresId}/${Number(params.page) + 1}`
                );
                window.scrollTo({
                  top: 0,
                  behavior: `smooth`,
                });
              }}
            >
              Next Page
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Genres;

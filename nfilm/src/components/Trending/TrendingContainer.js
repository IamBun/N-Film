import classes from "./trendingContainer.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Image from "../UI/Image";
import logo from "../../assets/logo.png";
import MovieDetail from "../Home/homeContainer/movieDetail/MovieDetail";

const Trending = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [MoviePoster, setMoviePoster] = useState([]);
  const [isHover, setIsHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [idFilm, setIdFilm] = useState();
  const [totalPage, setTotalPage] = useState();

  if (!params.page) {
    params.page = 1;
  }

  const fetchMoviePoster = async function () {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3${props.requests.fetchTrending}&page=${
          params.page ? params.page : ""
        }`
      );

      if (!res.ok) {
        throw new Error("loading failed !");
      }
      const data = await res.json();
      setMoviePoster(data.results);
      setTotalPage(data.total_pages);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMoviePoster();
  }, [params]);

  const closeModal = (e) => {
    setShowModal(false);
    document.body.style.overflowY = "scroll";
  };

  return (
    <div className={classes.trending}>
      <div
        className={classes.moviePoster}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        {MoviePoster?.map((ele) => {
          return (
            <div className={classes.poster} key={ele.id}>
              <Image
                className={classes.poster_path}
                src={`https://image.tmdb.org/t/p/original${ele.poster_path}`}
                onClick={() => {
                  setIdFilm(ele.id);
                  setShowModal(true);
                }}
                fallback={logo}
              />
              <p>
                {ele.name ||
                  ele.original_name ||
                  ele.title ||
                  ele.original_title}
              </p>
            </div>
          );
        })}
      </div>
      {1 <= params.page <= totalPage && (
        <div className={classes.action}>
          {params.page > 1 && (
            <button
              onClick={() => {
                navigate(`/trending/${Number(params.page) - 1}`);
                window.scrollTo({
                  top: 0,
                  behavior: `smooth`,
                });
              }}
            >
              Prev Page
            </button>
          )}
          <span>
            Page {params.page} of {totalPage}
          </span>
          {params.page < totalPage && (
            <button
              onClick={() => {
                navigate(`/trending/${Number(params.page) + 1}`);
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
      {showModal && (
        <MovieDetail id={idFilm} onClick={closeModal} movie={MoviePoster} />
      )}
    </div>
  );
};

export default Trending;

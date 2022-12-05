import { useEffect, useState } from "react";
import classes from "./banner.module.css";
import { AiFillInfoCircle } from "react-icons/ai";
import MovieDetail from "../homeContainer/movieDetail/MovieDetail";

const Banner = (props) => {
  const [banner, setBanner] = useState();
  const [showMoreInfor, setShowMoreInfor] = useState(false);
  const [movie, setMovie] = useState([]);

  const fetchBanner = async function () {
    //lay du lieu render banner tu API
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3${props.requests.fetchTrending}`
      );
      if (!res.ok) {
        throw new Error("loading failed !");
      }
      const data = await res.json();
      setMovie(data.results);
      setBanner(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const showMoreInforHandler = () => {
    setShowMoreInfor(true);
    document.body.style.overflowY = "hidden";
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  const closeModal = (e) => {
    setShowMoreInfor(false);
    document.body.style.overflowY = "scroll";
  };
  return (
    <>
      {banner && (
        <div
          className={classes.banner}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${banner?.backdrop_path})`,
          }}
        >
          {
            <div className={classes.description}>
              <h1>{banner.original_title || banner.title || banner.name}</h1>
              <div className={classes.actionBtn} onClick={showMoreInforHandler}>
                <AiFillInfoCircle />
                <button>More Infor</button>
              </div>
              <p>
                <span>{banner.overview}</span>
              </p>
            </div>
          }
          {showMoreInfor && movie && (
            <MovieDetail
              id={banner.id}
              movie={movie}
              onClick={closeModal}
            ></MovieDetail>
          )}
        </div>
      )}
    </>
  );
};

export default Banner;

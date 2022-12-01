import { useEffect, useState } from "react";
import classes from "./banner.module.css";
import Image from "../../UI/Image";
import images from "../../../assets/backDrop2.jpg";
import { AiFillInfoCircle } from "react-icons/ai";
import MovieDetail from "../homeContainer/movieDetail/MovieDetail";

const DUMMY_DATA = {
  name: "Black Panther: Wakanda Forever",
  overview:
    "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
  id: 505642,
};

const Banner = (props) => {
  const [banner, setBanner] = useState();
  const [error, setError] = useState(false);
  const [showMoreInfor, setShowMoreInfor] = useState(false);
  const [movie, setMovie] = useState([]);

  const fetchBanner = async function () {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3${props.requests.fetchTrending}`
      );
      if (!res.ok) {
        throw new Error("loading failed !");
      }
      const data = await res.json();
      console.log(data);
      setMovie(data.results);
      setBanner(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchBanner();
    setError(false);
  }, []);

  const imageErr = (boolean) => {
    setError(boolean);
  };

  const closeModal = (e) => {
    setShowMoreInfor(false);
    document.body.style.overflowY = "scroll";
  };
  return (
    <>
      {banner && (
        <div className={classes.banner}>
          <Image
            fallback={images}
            alt="bannerImg"
            className={classes.bannerImg}
            src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
            error={imageErr}
          />

          {/* Neu anh backdrop bi loi thi hien thi anh va data thay the co san trong file (if banner.backdrop_path === null) */}
          {!error ? (
            <div className={classes.description}>
              <h1>{banner.original_title || banner.title || banner.name}</h1>
              <div
                className={classes.actionBtn}
                onClick={() => {
                  setShowMoreInfor(true);
                  document.body.style.overflowY = "hidden";
                }}
              >
                <AiFillInfoCircle />
                <button>More Infor</button>
              </div>
              <p>
                <span>{banner.overview}</span>
              </p>
            </div>
          ) : (
            <div className={classes.description}>
              <h1>{DUMMY_DATA.name}</h1>
              <div
                className={classes.actionBtn}
                onClick={() => {
                  setShowMoreInfor(true);
                  document.body.style.overflowY = "hidden";
                }}
              >
                <AiFillInfoCircle />
                <button>More Infor</button>
              </div>

              <p>
                <span>{DUMMY_DATA.overview}</span>
              </p>
            </div>
          )}
          {showMoreInfor && movie && !error && (
            <MovieDetail
              id={banner.id}
              movie={movie}
              onClick={closeModal}
            ></MovieDetail>
          )}

          {showMoreInfor && movie && error && (
            <MovieDetail
              id={DUMMY_DATA.id}
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

import classes from "./movieDetail.module.css";
import { API_KEY } from "../../../const/CONST";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { AiFillCloseCircle, AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsPlayFill, BsFillPlusCircleFill } from "react-icons/bs";
import ModalMovieRelative from "./ModalMovieRelative";
import ModalInfor from "./ModalInfor";

const MovieDetail = (props) => {
  const [film, setFilm] = useState();
  const [video, setVideo] = useState([]);
  const [relative, setRelative] = useState(props.movie);
  const [showVideo, setShowVideo] = useState(false);
  const [closeVideo, setCloseVideo] = useState(false);

  const fetchFilmDetail = async function () {
    try {
      const res = await fetch(`
      https://api.themoviedb.org/3/movie/${props.id}?api_key=${API_KEY}&language=en-US`);

      if (!res.ok) {
        throw new Error("Loading film Failed !");
      }

      const data = await res.json();
      setFilm(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchVideo = async function () {
    try {
      const res = await fetch(`
      https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=${API_KEY}&language=en-US`);

      if (!res.ok) {
        throw new Error("Loading film Failed !");
      }

      const data = await res.json();
      setVideo(data.results[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchFilmDetail();
    fetchVideo();
    const relative6 = relative.slice(0, 6); // hien thi mot lan 6 phim
    setRelative(relative6);
  }, []);

  const opts = { //setup video Youtube
    width: "100%",
    height: "430px",
    playerVars: {
      autoplay: 0,
    },
  };

  const closeModal = () => {
    props.onClick();
  };

  const closeVideoHandler = () => {
    setCloseVideo(true);
  };
  window.addEventListener("keydown", (e) => { //nhan esc tren ban phim
    if (e.keyCode === 27) {
      props.onClick();
    }
  });

  const youtubeError = () => {
    alert("No video found ! ");
  };

  return (
    <div className={classes.movieDetailWrapper}>
      {film && (
        <div className={classes.movieDetail}>
          <AiFillCloseCircle
            className={classes.btnClose}
            onClick={closeModal}
          />
          {/* Anh Backdrop o phia tren  */}
          <div
            className={classes.modalBackdrop}
            style={{
              backgroundImage: `url(
                https://image.tmdb.org/t/p/original${film.backdrop_path}
              )`,
            }}
          >
            {/* Ten Phim va button click  */}
            <div className={classes.modalNameIcon}>
              <h1>{film.original_title || film.title}</h1>
              <div className={classes.iconBtn}>
                <div
                  className={classes.playBtn}
                  onClick={() => {
                    setShowVideo(true);
                    setCloseVideo(false);
                  }}
                >
                  <BsPlayFill />
                  <span>Play</span>
                </div>
                <div className={classes.addBtn}>
                  <BsFillPlusCircleFill />
                </div>
                <div className={classes.likeBtn}>
                  <AiFillLike />
                </div>
                <div className={classes.dislikeBtn}>
                  <AiFillDislike />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.modalBackdropBot}></div>

          {showVideo && !closeVideo && (
            <div className={classes.videoTrailer}>
              <YouTube
                videoId={video.key}
                opts={opts}
                onError={youtubeError}
              ></YouTube>

              <AiFillCloseCircle
                className={classes.videoCloseBtn}
                onClick={closeVideoHandler}
              />
            </div>
          )}

          {/* Info va phim lien quan o phia duoi  */}
          <div className={classes.modalInforRelative}>
            <ModalInfor film={film} />
            <ModalMovieRelative relative={relative} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;

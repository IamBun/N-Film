import classes from "./modalMovieRelative.module.css";
import { truncate } from "../../../../function/DateTime";
import { getYear } from "../../../../function/DateTime";
import { AiFillPlayCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

const ModalMovieRelative = (props) => {
  const [isHover, setIsHover] = useState({
    isHovered: {},
  });

  //hover
  const handleMouseEnter = (index) => {
    //khi re chuot vao thi index cua item do = true
    setIsHover((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: true } };
    });
  };

  const handleMouseLeave = (index) => {
    // khi re chuot ra thi index tra ve false
    setIsHover((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: false } };
    });
  };

  return (
    <div className={classes.filmRelative}>
      <h1>Relative Films</h1>
      <div className={classes.relativeWrapper}>
        {props.relative.map((ele, index) => (
          <div
            key={index}
            className={classes.relative}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              className={classes.relativeThumbnail}
              style={{
                backgroundImage: `url(
          https://image.tmdb.org/t/p/original${ele.backdrop_path}
        )`,
              }}
            >
              {/* Neu index cua item true thi hien thi nut play  */}
              {isHover.isHovered[index] && (
                <AiFillPlayCircle className={classes.playBtn} />
              )}
            </div>
            <div className={classes.relativeInfor}>
              <div>
                <p>
                  <span>
                    {ele.original_title ||
                      ele.title ||
                      ele.name ||
                      ele.original_name}{" "}
                  </span>
                  <span className={classes.inforYear}>
                    ({getYear(`${ele.release_date || ele.first_air_date}`)})
                  </span>
                </p>
                <p className={classes.inforVote}>{ele.vote_average} Rate</p>
              </div>
              <div className={classes.inforDescription}>
                {`${truncate(ele.overview, 120)}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalMovieRelative;

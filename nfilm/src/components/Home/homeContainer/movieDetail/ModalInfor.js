import classes from "./modalInfor.module.css";
import { getRunTime, getYear } from "../../../../function/DateTime";

const ModalInfor = (props) => {
  return (
    <div className={classes.modalInfor}>
      {/* Mota, thoi luong, chat luong, nam san xuat, rating o ben trai  */}
      <div className={classes.left}>
        <span className={classes.inforVote}>
          {props.film.vote_average} Rate
        </span>
        <span className={classes.inforYear}>
          {getYear(`${props.film.release_date}`)}
        </span>
        <span className={classes.inforTime}>
          {getRunTime(`${props.film.runtime}`)}
        </span>
        <span className={classes.inforQuality}>HD</span>
        <p>Description: {props.film.overview}</p>
      </div>
      {/* The loai va tinh trang o ben phai  */}
      <div className={classes.right}>
        <div className={classes.genres}>
          <p>
            Genres:
            {props.film.genres.map((ele, index) => (
              <span key={index}>{`${index ? "," : ""} ${ele.name}`}</span>
            ))}
          </p>
        </div>
        <div className={classes.status}>
          <p>
            Status:
            <span> {props.film.status}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalInfor;

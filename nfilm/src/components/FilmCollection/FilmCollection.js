import classes from "./filmCollection.module.css";
import Image from "../UI/Image";
import { useEffect, useState } from "react";

const FilmCollection = (props) => {
  const [film, setFilm] = useState([]);
  console.log(film);
  console.log(props.filmCollection.results);

  useEffect(() => {
    setFilm(props.filmCollection.results);
  });

  return (
    <div className={classes.filmCollection}>
      {film &&
        film.map((ele) => (
          <div className={classes.filmItem}>
            <Image
              src={`https://image.tmdb.org/t/p/original${ele.poster_path}`}
            ></Image>
            <h3>{ele.original_title}</h3>
          </div>
        ))}
    </div>
  );
};

export default FilmCollection;

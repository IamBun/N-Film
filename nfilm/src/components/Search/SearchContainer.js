import classes from "./searchContainer.module.css";
import images from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import useDebounce from "../../hooks/useDebounce";
import Image from "../UI/Image";
import FilmCollection from "../FilmCollection/FilmCollection";
import { useState, useEffect } from "react";

const SearchContainer = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debounce = useDebounce(searchValue, 500); // dung hooks useDebounce de bat su kien search sau 0,5s
  const [isType, setIsType] = useState(false);

  const valueSearchChangeHandler = (e) => {
    setSearchValue(e.target.value);
    setIsType(true);
    if (e.target.value === "") {
      setIsType(false);
    }
  };

  const fetchSearch = async function () {
    try {
      if (!debounce.trim()) {
        setSearchResults([]);
        return; // ban dau khong co du lieu
      }

      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${props.apikey}&language=en-US&page=1&query=${debounce}`
      );

      if (!res.ok) {
        throw new Error("loading failed !");
      }
      const data = await res.json();
      setSearchResults(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const resetSearch = () => {
    setSearchValue("");
    setSearchResults([]);
    setIsType(false);
  };

  useEffect(() => {
    fetchSearch();
  }, [debounce]);

  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchForm}>
        <Image src={images} className={classes.logoImg} />
        <input
          placeholder="Search film here..."
          onChange={valueSearchChangeHandler}
          value={searchValue}
        />
        {isType && (
          <AiFillCloseCircle
            className={classes.resetSearchBtn}
            onClick={resetSearch}
          />
        )}
        {!isType && <FaSearch />}
      </div>
      {searchResults && (
        <FilmCollection filmCollection={searchResults}></FilmCollection>
      )}
    </div>
  );
};

export default SearchContainer;

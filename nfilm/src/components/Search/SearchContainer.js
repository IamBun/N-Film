import classes from "./searchContainer.module.css";
import images from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import useDebounce from "../../hooks/useDebounce";
import Image from "../UI/Image";
import FilmCollection from "../FilmCollection/FilmCollection";
import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SearchContainer = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debounce = useDebounce(searchValue, 500); // dung hooks useDebounce de bat su kien search sau 0,5s
  const [isType, setIsType] = useState(false);
  const [totalPage, setTotalPage] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // goi lan dau de kiem tra thu xem nguoi dung co nhap params tren link hay khong
    if (params.keyword) {
      setSearchValue(params.keyword);
    }
    if (!params.page) {
      params.page = 1;
    }
  }, []);

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
        `https://api.themoviedb.org/3/search/movie?api_key=${
          props.apikey
        }&language=en-US&page=${params.page ? params.page : ""}
        &query=${debounce}`
      );
      if (!res.ok) {
        throw new Error("loading failed !");
      }
      const data = await res.json();
      setSearchResults(data);
      setTotalPage(data.total_pages);

      params.keyword = debounce;
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
  }, [debounce, params.page, params.keyword]);

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
      {debounce && (
        <div className={classes.action}>
          {params.page > 1 && (
            <button
              onClick={() => {
                navigate(
                  `/search/${params.keyword}/${Number(params.page) - 1}`
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
          {debounce && (
            <span>
              Page {params.page} of {totalPage}
            </span>
          )}

          {params.page < totalPage && (
            <button
              onClick={() => {
                navigate(
                  `/search/${params.keyword}/${Number(params.page) + 1}`
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

export default SearchContainer;

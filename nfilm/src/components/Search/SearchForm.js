import classes from "./searchForm.module.css";
import { BiSearch } from "react-icons/bi";

const SearchForm = (props) => {
  return (
    <div className={classes.searchForm}>
      <form>
        <input
          placeholder="Search film here..."
          // onChange={changeInputSearchHandle}
          // value={searchQuery}
        ></input>
        <BiSearch />
        <button></button>
      </form>
    </div>
  );
};

export default SearchForm;

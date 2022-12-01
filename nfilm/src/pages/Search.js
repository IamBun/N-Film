import Banner from "../components/Home/Banner/Banner";
import SearchContainer from "../components/Search/SearchContainer";

const Search = (props) => {
  return (
    <>
      {/* <Banner requests={props.requests}></Banner> */}
      <SearchContainer
        requests={props.requests}
        apikey={props.apikey}
      ></SearchContainer>
    </>
  );
};

export default Search;

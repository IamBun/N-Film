import Banner from "../components/Home/Banner/Banner";
import TrendingContainer from "../components/Trending/TrendingContainer";

const Trending = (props) => {
  return (
    <>
      <Banner requests={props.requests}></Banner>
      <TrendingContainer requests={props.requests}></TrendingContainer>
    </>
  );
};

export default Trending;

import React from "react";
import Banner from "../components/Home/Banner/Banner.js";
import HomeContainer from "../components/Home/homeContainer/HomeContainer";

const Home = (props) => {
  return (
    <>
      <Banner requests={props.requests}></Banner>
      <HomeContainer requests={props.requests}></HomeContainer>
    </>
  );
};

export default Home;

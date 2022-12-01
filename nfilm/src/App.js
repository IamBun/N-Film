import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";
import { motion } from "framer-motion";

const API_KEY = "dd6fdb772b28dae8f86ca8a8e9b397a3";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,

  fetchTvDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchTvFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchTvAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTvMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
};

function App() {
  return (
    <motion.div initial="hidden" animate="visible" exit="hidden">
      <Layout>
        <Routes>
          <Route path="/" element={<Home requests={requests} />} />
          <Route path="/tvshows" element={<TvShows requests={requests} />} />
          <Route path="/movies" element={<Movies requests={requests} />} />
          <Route
            path="/search"
            element={<Search requests={requests} apikey={API_KEY} />}
          />
        </Routes>
      </Layout>
    </motion.div>
  );
}

export default App;

export const FOOTER_DATA = [
  "FAQ",
  "Investor Relations",
  "Privacy",
  "Speed Test",
  "Help Center",
  "Jobs",
  "Cookie Preferences",
  "Legal Notices",
  "Account",
  "Ways to Watch",
  "Corporate Information",
  "Only on Netflix",
  "Media Center",
  "Terms of Use",
  "Contact Us",
  "Legal Notices",
];

export const API_KEY = "dd6fdb772b28dae8f86ca8a8e9b397a3";
export const API_KEY_NFLIM_FIREBASE = "AIzaSyCCQdkZFbdsl7GIbTT8psIfp1DJFTXEviU";

export const requests = {
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

export const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 10402,
    name: "Musics",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "Western",
  },
];

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
};

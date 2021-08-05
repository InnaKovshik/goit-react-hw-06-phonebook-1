import axios from 'axios';

const fetchMovies = (query, page) => {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';

  const API_KEY = '3255146d9b49dcda8b17a764cd594727';

  axios.defaults.baseURL = BASE_URL;
  axios.defaults.params = {
    api_key: API_KEY,
  };

  return axios
    .get(``, { params: { query, page } })
    .then(res => res.data.results);
};
export default fetchMovies;

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.headers['Authorization'] =
  `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`;

export const getAllTrendingMoviesAsync = async () => {
  const { data } = await axios.get('/trending/all/week');
  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(`search/movie`, {
    params: {
      query,
    },
  });
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data;
};

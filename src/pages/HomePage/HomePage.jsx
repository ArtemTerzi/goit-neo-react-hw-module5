import { useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { useFetchAsync } from '../../hooks/useFetchAsync';
import { getAllTrendingMoviesAsync } from '../../api/tmbd';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const HomePage = () => {
  const { data, loading, error, execute } = useFetchAsync(
    getAllTrendingMoviesAsync
  );

  useEffect(() => {
    execute();
  }, [execute]);

  const movies = data?.results ?? [];

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {!error && !loading && movies.length > 0 && <MovieList items={movies} />}
    </div>
  );
};

export default HomePage;

import { useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { useFetchAsync } from '../../hooks/useFetchAsync';
import { getAllTrendingMoviesAsync } from '../../api/tmbd';

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
      {loading && <p>LOADING...</p>}
      {error && <p>{error.message}</p>}
      {!error && !loading && movies.length > 0 && <MovieList items={movies} />}
    </div>
  );
};

export default HomePage;

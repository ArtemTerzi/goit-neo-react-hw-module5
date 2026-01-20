import { useSearchParams } from 'react-router';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { useEffect } from 'react';
import { useFetchAsync } from '../../hooks/useFetchAsync';
import { getMovieByQuery } from '../../api/tmbd';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, loading, error, execute } = useFetchAsync(getMovieByQuery);
  const query = searchParams.get('query') ?? '';
  const movies = data?.results ?? [];

  useEffect(() => {
    if (!query) return;
    execute(query);
  }, [execute, query]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;

    if (!query) searchParams.delete('query');
    else searchParams.set('query', query);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {movies.length > 0 && !error && !loading && <MovieList items={movies} />}
    </div>
  );
};

export default MoviesPage;

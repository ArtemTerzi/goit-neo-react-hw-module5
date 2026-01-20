import { NavLink, Outlet, useLocation, useParams } from 'react-router';
import { getMovieById } from '../../api/tmbd';
import { useFetchAsync } from '../../hooks/useFetchAsync';
import { useEffect, useRef } from 'react';
import BackBtn from '../../components/BackBtn/BackBtn';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import css from './MovieDetailsPage.module.css';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, loading, error, execute } = useFetchAsync(getMovieById);
  const location = useLocation();
  const ref = useRef(location.state);

  useEffect(() => {
    if (!movieId) return;
    execute(movieId);
  }, [execute, movieId]);

  return (
    <div>
      {error && <ErrorMessage message={error.message} />}
      {loading && <Loader />}
      {!error && !loading && data && (
        <div>
          <BackBtn location={ref} />
          <MovieDetail movie={data} />
          <div className={css.detailsWrapper}>
            <h2 className={css.subTitle}>Additional info</h2>
            <nav className={css.subNavigation}>
              <NavLink to="cast">Cast</NavLink>
              <NavLink to="reviews">Reviews</NavLink>
            </nav>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;

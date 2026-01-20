import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useFetchAsync } from '../../hooks/useFetchAsync';
import { getMovieReviews } from '../../api/tmbd';
import css from './MovieReviews.module.css';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const MovieReviews = () => {
  const { movieId } = useParams();
  const { data, loading, error, execute } = useFetchAsync(getMovieReviews);

  console.log(data);

  useEffect(() => {
    if (!movieId) return;
    execute(movieId);
  }, [execute, movieId]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      {data?.results && (
        <ul className={css.reviewsList}>
          {data.results.map(el => (
            <li key={el.id} className={css.reviewItem}>
              <h3 className={css.author}>Author: {el.author}</h3>
              <p className={css.content}>{el.content}</p>
            </li>
          ))}
        </ul>
      )}
      {data?.results.length == 0 && (
        <p className={css.noReviews}>
          We don't have any reviews for this movie.
        </p>
      )}
    </div>
  );
};

export default MovieReviews;

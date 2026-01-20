import { useParams } from 'react-router';
import { useFetchAsync } from '../../hooks/useFetchAsync';
import { getMovieCast } from '../../api/tmbd';
import { useEffect } from 'react';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const { data, loading, error, execute } = useFetchAsync(getMovieCast);

  useEffect(() => {
    if (!movieId) return;
    execute(movieId);
  }, [execute, movieId]);

  if (loading) return <p>LOADING...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {data?.cast && (
        <ul className={css.castList}>
          {data.cast.map(el => (
            <li key={el.cast_id} className={css.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + el.profile_path}
                alt="Actor photo"
                width={200}
              />
              <p>{el.name}</p>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;

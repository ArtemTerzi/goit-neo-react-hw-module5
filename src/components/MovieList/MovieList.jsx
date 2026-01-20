import { Link, useLocation } from 'react-router';
import css from './MovieList.module.css';

const MovieList = ({ items }) => {
  const myLocation = useLocation();

  return (
    <ul className={css.list}>
      {items.map(movie => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`} state={myLocation}>
            {movie.name || movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

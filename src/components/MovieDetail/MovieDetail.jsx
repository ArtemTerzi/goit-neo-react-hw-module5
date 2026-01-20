import css from './MovieDetail.module.css';

const MovieDetail = ({ movie }) => {
  console.log(movie);
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className={css.container}>
      <div>
        <img src={imageUrl} alt="Movie poster" className={css.poster} />
      </div>
      <div className={css.info}>
        <h1>{movie?.name || movie?.title}</h1>
        <p>User score: {Math.floor(movie.vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <p>{movie.genres.map(el => el.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieDetail;

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.spinner}></div>
      <p className={css.text}>Searching for movies...</p>
    </div>
  );
};

export default Loader;

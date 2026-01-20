import css from './SearchForm.module.css';

const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="query" className={css.input} />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;

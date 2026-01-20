import { NavLink } from 'react-router';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.navLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={css.navLink}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;

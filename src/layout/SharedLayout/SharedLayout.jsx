import { Outlet } from 'react-router';
import Navigation from '../../components/Navigation/Navigation';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <main className={css.container}>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;

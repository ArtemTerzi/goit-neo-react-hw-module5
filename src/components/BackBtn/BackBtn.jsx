import { useNavigate } from 'react-router';
import css from './BackBtn.module.css';

const BackBtn = ({ location }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(location.current ?? '/movies');
  };

  return (
    <button type="button" onClick={handleClick} className={css.button}>
      Go back
    </button>
  );
};

export default BackBtn;

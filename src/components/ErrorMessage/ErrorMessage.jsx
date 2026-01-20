import css from './ErrorMessage.module.css';

const ErrorMessage = ({
  message = 'Something went wrong. Please try again later.',
}) => {
  return (
    <div className={css.container}>
      <div className={css.icon}>⚠️</div>
      <p className={css.text}>{message}</p>
    </div>
  );
};

export default ErrorMessage;

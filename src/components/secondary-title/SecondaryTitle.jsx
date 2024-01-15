import css from './SecondaryTitle.module.css';

export const SecondaryTitle = ({ children }) => {
  return <h2 className={css.secondaryTitle}>{children}</h2>;
};

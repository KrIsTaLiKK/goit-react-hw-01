import css from './SecondaryTitle.module.css';

export const SecondaryTitle = ({ title }) => {
  return <h2 className={css.secondaryTitle}>{title}</h2>;
};

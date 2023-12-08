import styles from './index.module.scss';

const ThemeProvider = ({ theme = 'light', children }) => (
  <div className={styles[theme]}>{children}</div>
);
export default ThemeProvider;

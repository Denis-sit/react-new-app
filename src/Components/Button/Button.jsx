import styles from './style.module.css';

export default function Button({ onClick, children }) {
  return (
    <button className={styles.button__rank} onClick={onClick}>
      {children}
    </button>
  );
}

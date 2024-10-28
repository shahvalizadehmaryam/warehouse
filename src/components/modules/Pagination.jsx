import styles from "./Pagination.module.css";
// eslint-disable-next-line
const Pagination = ({ page, setPage }) => {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page >= 5) return;
    setPage((page) => page + 1);
  };
  return (
    <div className={styles.pagination}>
      <button
        onClick={previousHandler}
        className={page === 1 ? styles.disabled : null}
      >
        Previous
      </button>
      <p  className={page === 1 ? styles.selected : null}>
        1
      </p>
      <p  className={page === 2 ? styles.selected : null}>
        2
      </p>
      <p  className={page === 3 ? styles.selected : null}>
        3
      </p>
      <button
        onClick={nextHandler}
        className={page === 3 ? styles.disabled : null}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

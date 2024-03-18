import styles from "./styles.module.css";

export const Pagination = ({ totalPage, handlePageClick, handlePreviousPage, handlenextPage ,currentPage}) => {
  return (
    <header className={styles.pagination}>
      <button className={styles.arrow} onClick={handlePreviousPage} disabled={currentPage <= 1}>{"<"}</button>
      <div className={styles.list}>
        {[...Array(totalPage)].map((_, index) => (
          <button className={styles.pageNumber} disabled={index + 1 === currentPage} onClick={() => handlePageClick(index + 1)}  key={index}>{index + 1}</button>
        ))}
      </div>
      <button className={styles.arrow} onClick={handlenextPage} disabled={currentPage >= totalPage}>{">"}</button>
    </header>
  );
};

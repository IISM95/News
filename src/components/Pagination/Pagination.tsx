import { useTheme } from "../../context/Themecontext";
import { IPaginationProps } from "../../interfaces";
import styles from "./styles.module.css";



export const Pagination = ({ totalPage, handlePageClick, handlePreviousPage, handlenextPage ,currentPage}: IPaginationProps) => {
  const {isDark} = useTheme()
  return (
    <header className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
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

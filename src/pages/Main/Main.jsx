import React from "react";
import { NewsBanner } from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/api.news";
import { NewsList } from "../../components/NewsList/NewsList";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { Pagination } from "../../components/Pagination/Pagination";

export const Main = () => {
  const [news, setNews] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPage = 10;
  const pageSize = 10;

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const res = await getNews(currentPage, pageSize);
      setNews(res.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchNews();
  }, [currentPage]);

  const handlenextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}

      <Pagination
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handlenextPage={handlenextPage}
        totalPage={totalPage}
        currentPage={currentPage}
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}

      <Pagination
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handlenextPage={handlenextPage}
        totalPage={totalPage}
        currentPage={currentPage}
      />
    </main>
  );
};

import React from "react";
import { NewsBanner } from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/api.news";
import { NewsList } from "../../components/NewsList/NewsList";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { Pagination } from "../../components/Pagination/Pagination";
import { Categories } from "../../components/Categories/Categories";
import { Search } from "../../components/Search/Search";
import { useDebounce } from "../../components/helpers/hooks/useDebounce";

export const Main = () => {
  const [news, setNews] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [keywords, setKeywords] = React.useState('')


  const totalPage = 10;
  const pageSize = 10;

  const debounsedKetword = useDebounce(keywords,3000)
  
  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const res = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "All" ? null : selectedCategory,
        keywords:keywords
      });
      setNews(res.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(["All", ...res.categories]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  React.useEffect(() => {
    fetchNews();
  }, [currentPage, selectedCategory,debounsedKetword]);

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
    <Categories setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} categories={categories}/>
    <Search keywords={keywords} setKeywords={setKeywords}/>
  

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

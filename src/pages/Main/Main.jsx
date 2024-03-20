
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/api.news";
import { Pagination } from "../../components/Pagination/Pagination";
import { Categories } from "../../components/Categories/Categories";
import { Search } from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import { useFetch } from "../../helpers/hooks/useFetch";
import { PAGE_SIZE, TOTAL_PAGE } from "../../constants/constants";
import { useFilter } from "../../helpers/hooks/useFilters";

export const Main = () => {

 const {filters, changeFilter} = useFilter({
  page_number: 1,
  page_size: PAGE_SIZE,
  category: null,
  keywords: "",
})
  const debounsedKetword = useDebounce(filters.keywords, 1000);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debounsedKetword,
  });

  const { data: dataCategories } = useFetch(getCategories);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGE) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          setSelectedCategory={(category) => changeFilter('category',category)}
          selectedCategory={filters.category}
          categories={dataCategories.categories}
        />
      ) : null}

      <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords',keywords)} />

      <NewsBanner
        item={data && data.news && data.news[0]}
        isLoading={isLoading}
      />

      <Pagination
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handlenextPage={handleNextPage}
        totalPage={TOTAL_PAGE}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={data?.news} />

      <Pagination
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handlenextPage={handleNextPage}
        totalPage={TOTAL_PAGE}
        currentPage={filters.page_number}
      />
    </main>
  );
};

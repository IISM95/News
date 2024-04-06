import { useAppDispatch, useAppSelector } from "@/app/appStore";
import NewsList from "@/widgets/news/ui/NewsList/NewsList";
import { TOTAL_PAGE } from "@/shared/constants/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./styles.module.css";
import { Pagination } from "@/features/pagination";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { NewsFilters } from "@/widgets/news";

export const NewsByFilters = () => {
  const dispath = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debounsedKetword = useDebounce(filters.keywords, 3000);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debounsedKetword,
  });

  const { data } = useGetCategoriesQuery(null);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGE) {
      dispath(
        setFilters({ key: "page_number", value: filters.page_number + 1 })
      );
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispath(
        setFilters({ key: "page_number", value: filters.page_number - 1 })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispath(setFilters({ key: "page_number", value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories ={data?.categories || []}/>

      <Pagination
        top
        bottom
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handlenextPage={handleNextPage}
        totalPage={TOTAL_PAGE}
        currentPage={filters.page_number}
      >
        <NewsList
          direction="column"
          type="item"
          isLoading={isLoading}
          news={news}
        />
      </Pagination>
    </section>
  );
};

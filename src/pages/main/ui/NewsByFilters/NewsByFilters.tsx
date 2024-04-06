import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { NewsFilters } from "@/widgets/news";
import { NewsListWithPagination } from "../NewsListWithPagination/NewsListWithPagination";

export const NewsByFilters = () => {

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debounsedKetword = useDebounce(filters.keywords, 3000);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debounsedKetword,
  });

  const { data } = useGetCategoriesQuery(null);



  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories ={data?.categories || []}/>
      <NewsListWithPagination filters={filters} news={news} isLoading={isLoading}/>
    </section>
  );
};

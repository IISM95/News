import { getCategories } from "../../api/api.news";
import { useFetch } from "../../helpers/hooks/useFetch";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search/Search";
import styles from "./styles.module.css";

export const NewsFilters = ({filters, changeFilter}) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Categories
          setSelectedCategory={(category) => changeFilter("category", category)}
          selectedCategory={filters.category}
          categories={dataCategories.categories}
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

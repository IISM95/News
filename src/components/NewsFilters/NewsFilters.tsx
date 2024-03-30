import { getCategories } from "../../api/api.news";
import { useTheme } from "../../context/Themecontext";
import { useFetch } from "../../helpers/hooks/useFetch";
import { CategoriesApiResponse, IFilters } from "../../interfaces";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search/Search";
import { Slider } from "../Slider/Slider";
import styles from "./styles.module.css";


interface NewsFiltersProps {
  filters: IFilters
  changeFilter: (key:string, value:number | string | null) => void
}

export const NewsFilters = ({ filters, changeFilter}:NewsFiltersProps) => {
  const { data: dataCategories } = useFetch<CategoriesApiResponse,null>(getCategories);


  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider >
          <Categories
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
            selectedCategory={filters.category}
            categories={dataCategories.categories}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

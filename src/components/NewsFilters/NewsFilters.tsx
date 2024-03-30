import { IFilters } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search/Search";
import { Slider } from "../Slider/Slider";
import styles from "./styles.module.css";

interface NewsFiltersProps {
  filters: IFilters;
}

export const NewsFilters = ({ filters }: NewsFiltersProps) => {
  const { data } = useGetCategoriesQuery(null);
  const dispath = useAppDispatch();

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider>
          <Categories
            setSelectedCategory={(category) =>
              dispath(setFilters({ key: "category", value: category }))
            }
            selectedCategory={filters.category}
            categories={data.categories}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispath(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

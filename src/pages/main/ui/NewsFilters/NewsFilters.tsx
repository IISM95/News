import { useAppDispatch } from "@/app/appStore";
import { Categories } from "@/features/category/ui/Categories/Categories";
import { Search } from "@/features/search/ui/Search/Search";
import { Slider } from "@/features/slider/ui/Slider/Slider";
import { IFilters } from "@/shared/interfaces";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";

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

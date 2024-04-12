import { useAppDispatch } from "@/app/appStore";
import { Categories } from "@/features/category/ui/Categories/Categories";
import { Search } from "@/features/search/ui/Search/Search";
import { Slider } from "@/features/slider/ui/Slider/Slider";
import { IFilters } from "@/shared/interfaces";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./styles.module.css";
import { CategoriesType } from "@/entities/category";

interface NewsFiltersProps {
  filters: IFilters;
  categories: CategoriesType[];
}

export const NewsFilters = ({ filters, categories }: NewsFiltersProps) => {

  
  const dispath = useAppDispatch();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider>
          <Categories
            setSelectedCategory={(category) => dispath(setFilters({ key: "category", value: category }))}
            selectedCategory={filters.category}
            categories={categories}
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

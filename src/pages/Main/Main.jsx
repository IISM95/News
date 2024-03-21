import styles from "./styles.module.css";
import { getNews } from "../../api/api.news";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { PAGE_SIZE} from "../../constants/constants";
import { useFilter } from "../../helpers/hooks/useFilters";
import { LatestNews } from "../../components/LatestNews/LatestNews";
import { NewsByFilters } from "../../components/NewsByFilters/NewsByFilters";

export const Main = () => {
  const { filters, changeFilter } = useFilter({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });
  const debounsedKetword = useDebounce(filters.keywords, 3000);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debounsedKetword,
  });


  return (

    <main className={styles.main}>
      
      <LatestNews isLoading={isLoading} banners={data && data.news}/>

      <NewsByFilters filters ={filters} changeFilter ={changeFilter} isLoading={isLoading} news={data?.news}/>

    </main>
  );
};

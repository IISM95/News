import { getLatesNews } from "../../api/api.news";
import { useFetch } from "../../helpers/hooks/useFetch";
import { NewsApiResponse } from "../../interfaces";
import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";


export const LatestNews = () => {

  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatesNews);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

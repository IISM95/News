//список новостей после главной новости которые мепятся в настроенную карточку
import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";
import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./styles.module.css";


interface NewsListProps {
  news?: INews[]
}

const NewsList = ({ news }:NewsListProps) => {
  return (
    <ul className={styles.list}>
      {
        news?.map(item => (
          <NewsItem key={item.id} item={item}/>
        ))
      }
    </ul>
  );
};

const NewsBannerWithSceleton = withSkeleton<NewsListProps>(NewsList, "item", 10)

export default NewsBannerWithSceleton

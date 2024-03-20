//список новостей после главной новости которые мепятся в настроенную карточку
import withSkeleton from "../../helpers/hocs/withSkeleton";
import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./styles.module.css";


const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {
        news.map(item => (
          <NewsItem key={item.id} item={item}/>
        ))
      }
    </ul>
  );
};

const NewsBannerWithSceleton = withSkeleton(NewsList, "item", 10)

export default NewsBannerWithSceleton

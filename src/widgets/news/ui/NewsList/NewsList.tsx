import { INews, NewsItem } from "@/entities/news";
import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./styles.module.css";

interface NewsListProps {
  news?: INews[];
}

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const NewsBannerWithSceleton = withSkeleton<NewsListProps>(
  NewsList,
  "item",
  10
);

export default NewsBannerWithSceleton;

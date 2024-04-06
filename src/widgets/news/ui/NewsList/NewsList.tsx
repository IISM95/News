import { INews } from "@/entities/news";
import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./styles.module.css";
import { NewsCard } from "@/entities/news/ui/NewsCard/NewsCard";

interface NewsListProps {
  news?: INews[];
  type?: "banner" | "item";
  direction?: "row" | "column";
}

const NewsList = ({ news, type = "item" }: NewsListProps) => {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => (
        <NewsCard key={item.id} item={item} type={type} />
      ))}
    </ul>
  );
};

const NewsBannerWithSceleton = withSkeleton<NewsListProps>(NewsList, 10);

export default NewsBannerWithSceleton;

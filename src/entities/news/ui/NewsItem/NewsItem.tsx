import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { INews } from "../..";
import styles from "./styles.module.css";

interface NewsItem {
  item: INews;
}

export const NewsItem = ({ item }: NewsItem) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

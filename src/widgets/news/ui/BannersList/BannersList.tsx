import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./styles.module.css";
import { INews, NewsBanner } from "@/entities/news";


interface BannersListProps {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: BannersListProps) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
};

const BannersListWithSceleton = withSkeleton<BannersListProps>(
  BannersList,
  "banner",
  10,
  "row"
);

export default BannersListWithSceleton;

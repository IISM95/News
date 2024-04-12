import { useTheme } from "@/app/provaiders/ThemeProvader";
import styles from "./styles.module.css";
import { ThemeButton } from "@/features/theme/ui/themeButton/ThemeButton";
import { formatDate } from "@/shared/helpers/formatDate";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isDark } = useTheme();

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <Link to={"/"}>
          <h1 className={styles.title}>News Islam</h1>
        </Link>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
};

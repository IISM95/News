import { useTheme } from "@/app/provaiders/ThemeProvader";
import styles from "./styles.module.css";
import { ThemeButton } from "@/features/theme/ui/themeButton/ThemeButton";
import { formatDate } from "@/shared/helpers/formatDate";

export const Header = () => {
  const { isDark } = useTheme();

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>News Islam</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
};

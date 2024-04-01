import { useTheme } from "@/app/provaiders/ThemeProvader";
import { themeIcons } from "@/shared/assets";

export const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <img
      src={isDark ? themeIcons.light : themeIcons.dark}
      width={30}
      alt="theme"
      onClick={toggleTheme}
    />
  );
};

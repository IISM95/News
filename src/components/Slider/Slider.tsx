import React from "react";
import styles from "./styles.module.css";
import { useTheme } from "../../context/Themecontext";

interface SliderProps {
  children: React.ReactElement;
  step?: number;
}

export const Slider = ({ children, step = 200}: SliderProps) => {
  const sliderRef = React.useRef<HTMLElement | null>(null);
  const {isDark} = useTheme()

  const scrollLeft = () => {
    if(!sliderRef.current) return 
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if(!sliderRef.current) return 
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.arrow}>{`>`}</button>
    </div>
  );
};

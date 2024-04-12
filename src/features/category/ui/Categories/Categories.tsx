import React, { ForwardedRef } from "react";
import styles from "./styles.module.css";
import { CategoriesType } from "@/entities/category";

interface CategoriesProps {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

export const Categories = React.forwardRef(({ categories, setSelectedCategory, selectedCategory }: CategoriesProps,ref: ForwardedRef<HTMLDivElement>) => {
  
    return (
      <div ref={ref} className={styles.categories}>
        <button
          className={!selectedCategory ? styles.active : styles.item}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              className={
                selectedCategory === category ? styles.active : styles.item
              }
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = "Categories";

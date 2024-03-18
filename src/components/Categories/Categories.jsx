import styles from "./styles.module.css";

export const Categories = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <div className={styles.categories}>
      {categories.map((catigory) => (
        <button
          className={
            selectedCategory === catigory ? styles.active : styles.item
          }
          key={catigory}
          onClick={() => setSelectedCategory(catigory)}
        >
          {catigory}
        </button>
      ))}
    </div>
  );
};

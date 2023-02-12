import styles from "./Category.module.scss";
const Category = ({ headline }) => {
  return <li className={styles.category}>{headline}</li>;
};

export default Category;

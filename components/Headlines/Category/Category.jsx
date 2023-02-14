import Link from "next/link";
import styles from "./Category.module.scss";
const Category = ({ headline }) => {
  return (
    <li className={styles.category}>
      <Link href={headline != "general" ? headline : "/"}>{headline}</Link>
    </li>
  );
};

export default Category;

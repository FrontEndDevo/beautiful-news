import Link from "next/link";
import styles from "./Category.module.scss";
const Category = ({ headline, index }) => {
  return (
    <li
      className={`${styles.category} ${
        styles[`${index % 2 == 0 ? "even" : "odd"}`]
      }`}
    >
      <Link href={headline != "general" ? headline : "/"}>{headline}</Link>
    </li>
  );
};

export default Category;

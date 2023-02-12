import Category from "./Category/Category";
import styles from "./Headlines.module.scss";
const TOP_HEADLINES = [
  "general",
  "entertainment",
  "business",
  "health",
  "science",
  "sports",
  "technology",
];
const Headlines = () => {
  const allHeadlines = TOP_HEADLINES.map((headline, index) => (
    <Category key={index} headline={headline} />
  ));
  return (
    <div className={styles.headlines}>
      <h2>
        Re-framing
        <br />
        <span>the world</span>
      </h2>
      <ul className={styles.categories}>{allHeadlines}</ul>
    </div>
  );
};

export default Headlines;

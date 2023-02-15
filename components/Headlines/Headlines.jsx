import Category from "./Category/Category";
import styles from "./Headlines.module.scss";
export const TOP_HEADLINES = [
  {
    headline: "general",
    img: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    headline: "entertainment",
    img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    headline: "business",
    img: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    headline: "health",
    img: "https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    headline: "science",
    img: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    headline: "sports",
    img: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    headline: "technology",
    img: "https://images.pexels.com/photos/6153741/pexels-photo-6153741.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];
const Headlines = () => {
  const allHeadlines = TOP_HEADLINES.map((headlineObj, index) => (
    <Category key={index} headline={headlineObj.headline} />
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

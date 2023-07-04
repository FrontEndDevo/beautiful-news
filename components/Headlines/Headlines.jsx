import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Category from "./Category/Category";
import styles from "./Headlines.module.scss";
import {
  faArrowDownLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
export const TOP_HEADLINES = [
  {
    headline: "general",
    img: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    headline: "entertainment",
    img: "https://images.pexels.com/photos/2927080/pexels-photo-2927080.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
    img: "https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];
const Headlines = () => {
  const allHeadlines = TOP_HEADLINES.map((headlineObj, index) => (
    <Category key={index} headline={headlineObj.headline} />
  ));
  return (
    <section className={styles.headlines}>
      <div className={styles.text}>
        <h2>
          Re-framing
          <br />
          <span>the world</span>
        </h2>
        <div className={styles.more}>
          <p>More news</p>
          <FontAwesomeIcon
            icon={faArrowRightLong}
            bounce
            size="lg"
            className={styles["arrow-right"]}
          />
          <FontAwesomeIcon
            icon={faArrowDownLong}
            bounce
            size="lg"
            className={styles["arrow-down"]}
          />
        </div>
      </div>
      <ul className={styles.categories}>
        {allHeadlines}
        <Category headline="everything" />
      </ul>
    </section>
  );
};

export default Headlines;

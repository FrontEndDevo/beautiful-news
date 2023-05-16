import { useState } from "react";
import Story from "../Stories/Story/Story";
import classes from "./HomeSlider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
const HomeSlider = (props) => {
  const [storyIndex, setStoryIndex] = useState(0);

  const { news, category } = props;

  // Avoid getting news with no image & get only the first 10 stories to display.
  const slicedNews = news
    .filter((item) => item.urlToImage != null)
    .slice(0, 10);

  const prevSlideHandler = () => {
    if (storyIndex > 0) {
      setStoryIndex(storyIndex - 1);
    }
  };

  const nextSlideHandler = () => {
    if (storyIndex < news.length - 1) {
      setStoryIndex(storyIndex + 1);
    }
  };

  return (
    <div className={classes.slider}>
      <div className={classes.controls}>
        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
        <div className={classes.buttons}>
          <button onClick={prevSlideHandler} disabled={storyIndex == 0}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            onClick={nextSlideHandler}
            disabled={storyIndex == slicedNews.length - 4}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div
        className={classes["slider-container"]}
        style={{
          transform: `translateX(-${storyIndex * (100 / slicedNews.length)}%)`,
        }}
      >
        {slicedNews.map((story, index) => (
          <Story key={index} story={story} />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;

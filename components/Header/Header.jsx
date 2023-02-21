import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import classes from "./Header.module.scss";
import Shape from "../Shape/Shape";
const Header = ({ news, allowTitles = false }) => {
  const [pickedStory, setPickedStory] = useState(news[0]);
  // Pick a story and put its info in the header cells every (1m || 60000 milliseconds):
  useEffect(() => {
    const interval = setInterval(() => {
      setPickedStory(news[Math.floor(Math.random() * news.length)]);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [news, setPickedStory]);

  return (
    <div className={classes.header}>
      <div className={classes.content}>
        <div className="L-H-S">
          {allowTitles && <h3>Today's beautiful news</h3>}
          <h1>{pickedStory.title || ""}</h1>
          {allowTitles && (
            <div className={classes.titles}>
              <Link href="#">Community</Link>
              <Link href="#">South Africa</Link>
            </div>
          )}
          <button>
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </div>
      </div>
      <img
        src={
          pickedStory.urlToImage ||
          "https://www.linkpicture.com/q/image-not-found-1-scaled.png"
        }
        alt={pickedStory.title}
      />
      {allowTitles && (
        <div className={classes.shape}>
          <Shape>
            <button>
              Share hope.
              <br />
              Submit your story
            </button>
          </Shape>
        </div>
      )}
    </div>
  );
};

export default Header;

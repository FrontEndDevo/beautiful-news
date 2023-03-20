import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import classes from "./Header.module.scss";
import Shape from "../Shape/Shape";
import { detectAndFetch } from "../../helpers/detectAndFetch";
const Header = ({ allowTitles = false }) => {
  const fetchHeaderNews = detectAndFetch();

  const [pickedStory, setPickedStory] = useState(fetchHeaderNews[0]);
  // Pick a story and put its info in the header cells every (1m || 60000 milliseconds):
  useEffect(() => {
    const interval = setInterval(() => {
      setPickedStory(
        fetchHeaderNews[Math.floor(Math.random() * fetchHeaderNews.length)]
      );
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [fetchHeaderNews, setPickedStory]);

  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <div className="L-H-S">
          {allowTitles && <h3>Today's beautiful news</h3>}
          <h1>{pickedStory.title || ""}</h1>
          {allowTitles && (
            <div className={classes.titles}>
              <Link href="/">General</Link>
              <Link href="/everything">Everything</Link>
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
    </header>
  );
};

export default Header;

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import classes from "./Header.module.scss";
import Shape from "../Shape/Shape";
import { detectAndFetch } from "../../helpers/detectAndFetch";
import { useSelector } from "react-redux";
const Header = ({ isHomePage = false }) => {
  /*
  - If we are in the (Home-Page), then we will fetch all types of news (General, sports, etc...).
  - We map on each 'headline' and get its (articles), then filter them and get only the first 10.
  - We use (flatMap method) to map each array (headline) and extract the objects.
   */
  const fetchHeaderNews = isHomePage
    ? useSelector((state) => state.headlines.headlines)
        .map((headline) =>
          headline.articles
            .filter((item) => item.urlToImage != null)
            .slice(0, 10)
        )
        .flatMap((stories) => stories)
    : detectAndFetch();

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
      <img
        src={
          pickedStory.urlToImage ||
          "https://www.linkpicture.com/q/image-not-found-1-scaled.png"
        }
        alt={pickedStory.title}
      />
      <div className={classes.content}>
        <h3>Today's beautiful news</h3>
        <h1>{pickedStory.title || ""}</h1>

        <div className={classes.titles}>
          <Link href="/">General</Link>
          <Link href="/everything">Everything</Link>
        </div>

        <Link
          href={pickedStory.url}
          target="_blank"
          className={classes["play-icon"]}
        >
          <FontAwesomeIcon icon={faPlay} />
          <p>Watch video</p>
        </Link>
      </div>

      <Link href="/submit-story" className={classes.shape}>
        <Shape>
          <button>
            Share hope.
            <br />
            Submit your story
          </button>
        </Shape>
      </Link>
    </header>
  );
};

export default Header;

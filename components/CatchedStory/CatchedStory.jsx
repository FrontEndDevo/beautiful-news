import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import classes from "./CatchedStory.module.scss";
import { useEffect, useState } from "react";
const CatchedStory = ({ story }) => {
  const [authorWidth, setAuthorWidth] = useState("");

  // Extract all properties and put default values.
  const theStory = {
    title: story.title || "There is no title.",
    author: story.author || "Unknown author",
    content: story.content || "There is no content.",
    description: story.description || "There is no description.",
    urlToImage:
      story.urlToImage ||
      "https://www.linkpicture.com/q/image-not-found-1-scaled.png",
    url: story.url || "/",
  };

  // Delete (content… '[+5450 chars]') if the content value is not null, otherwise use the default value of content.
  const modifiedConetent = story.content
    ? theStory.content.substring(0, theStory.content.split("").lastIndexOf("["))
    : theStory.content;

  useEffect(() => {
    // Ready code to measure word length from (geeksforgeeks):
    // To center the author name on the img below.
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const countAuthorWidth = Math.ceil(
      context.measureText(theStory.author).width
    );
    setAuthorWidth(countAuthorWidth);
  }, [theStory.author]);

  return (
    <section className={classes["catched-story"]}>
      <div className={classes["top-content"]}>
        <h2 className={classes.title}>{theStory.title}</h2>
        <div className={classes.links}>
          <Link href="/">General</Link>
          <Link href="/everything">Everything</Link>
        </div>
        <div className={classes.social}>
          <Link className={classes.play} href={theStory.url} target="_blank">
            <FontAwesomeIcon icon={faPlay} />
          </Link>
          <div className={classes.icons}>
            <FontAwesomeIcon icon={faBookmark} />
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faPaperPlane} />
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
      <div className={classes.image}>
        <img src={theStory.urlToImage} alt={theStory.author} />
        {theStory.author && (
          <h4
            className={classes.author}
            style={{ left: `calc(45% - ${authorWidth}px)` }}
          >
            {theStory.author}
          </h4>
        )}
      </div>
      <div className={classes["bottom-content"]}>
        <div className={classes.paragraph}>
          <p className={classes.content}>{modifiedConetent}</p>
          <p className={classes.description}>{theStory.description}</p>
        </div>
        <Link
          className={classes["read-more"]}
          href={theStory.url}
          target="_blank"
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default CatchedStory;

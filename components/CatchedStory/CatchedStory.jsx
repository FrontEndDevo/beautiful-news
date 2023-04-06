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
const CatchedStory = (props) => {
  const [authorWidth, setAuthorWidth] = useState("");

  // Extract all properties using destructuring:
  const {
    title,
    author,
    content,
    description,
    urlToImage,
    url,
    source: { id, name },
  } = props.story;

  // To delete (content… '[+5450 chars]') of each content.
  const modifiedConetent = content.substring(
    0,
    content.split("").lastIndexOf("[")
  );

  useEffect(() => {
    // Ready code to measure word length from (geeksforgeeks):
    // To center the author name on the img below.
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const countAuthorWidth = Math.ceil(context.measureText(author).width);
    setAuthorWidth(countAuthorWidth);
  }, [author]);

  console.log(authorWidth);

  return (
    <section className={classes["catched-story"]}>
      <div className={classes["top-content"]}>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.links}>
          <Link href="/">General</Link>
          <Link href="/everything">Everything</Link>
        </div>
        <div className={classes.social}>
          <Link className={classes.play} href={url} target="_blank">
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
        <img src={urlToImage} alt={author} />
        {author && (
          <h4
            className={classes.author}
            style={{ left: `calc(45% - ${authorWidth}px)` }}
          >
            {author}
          </h4>
        )}
      </div>
      <div className={classes["bottom-content"]}>
        <div className={classes.paragraph}>
          <p className={classes.content}>{modifiedConetent}</p>
          <p className={classes.description}>{description}</p>
        </div>
        <Link className={classes["read-more"]} href={url} target="_blank">
          Read More
        </Link>
      </div>
    </section>
  );
};

export default CatchedStory;

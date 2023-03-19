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
const CatchedStory = (props) => {
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

  return (
    <div className={classes["catched-story"]}>
      <div className={classes["top-content"]}>
        <h2 className={classes.title}>{title}</h2>
        <h4 className={classes.author}>{author}</h4>
        <div className={classes.links}>
          <Link href="/">General</Link>
          <Link href="/everything">Everything</Link>
        </div>
        <div className={classes.social}>
          <Link href={url} target="_blank">
            <FontAwesomeIcon icon={faPlay} />
          </Link>
          <div className={classes.icons}>
            <FontAwesomeIcon icon={faBookmark} />
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faPaperPlane} />
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
        <img className={classes.image} src={urlToImage} alt={author} />
      </div>
      <div className={classes["bottom-content"]}>
        <p className={classes.content}>{content}</p>
        <p className={classes.description}>{description}</p>
        <Link className={classes['read-more']} href={url} target="_blank">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CatchedStory;

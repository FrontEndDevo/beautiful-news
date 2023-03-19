import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import classes from "./Story.module.scss";
import Link from "next/link";
const Story = (props) => {
  const { author, title, urlToImage: img } = props;
  // Fix (Long author name) problem
  const editedAuthor =
    author.length > 20 ? `${author.split(" ")[0]}...` : author;
  return (
    <Link
      href={`news/${title.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s/g, "-")}`}
      className={classes.story}
    >
      <h4 className={classes.author}>{editedAuthor}</h4>
      <p className={classes.title}>{title}</p>
      <img className={classes["story-image"]} src={img} alt={author} />
      <div className={classes["image-hover"]}></div>
      <div className={classes.icons}>
        <div className={classes["top-icons"]}>
          <FontAwesomeIcon icon={faBookmark} />
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <FontAwesomeIcon icon={faPlay} className={classes["bottom-icon"]} />
      </div>
    </Link>
  );
};

export default Story;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import classes from "./Story.module.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { choosenStoryActions } from "../../../store/story-slice";
import { useRouter } from "next/router";
const Story = (props) => {
  const author = props.story.author ? props.story.author : "Unknown Author";
  const title = props.story.title ? props.story.title : "No Title";
  const img = props.story.urlToImage
    ? props.story.urlToImage
    : "https://www.linkpicture.com/q/image-not-found-1-scaled.png";

  // Fix (Long author name) problem
  const editedAuthor =
    author.length > 20 ? `${author.split(" ")[0]}...` : author;

  const dispatch = useDispatch();
  const clickedChoosenStoryHandler = () => {
    dispatch(choosenStoryActions.setChoosenStory(props.story));
  };

  const router = useRouter();

  return (
    <Link
      href={`/news/${title.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s/g, "-")}`}
      className={`${classes.story} ${router.asPath == "/" ? classes.home : ""}`}
      onClick={clickedChoosenStoryHandler}
    >
      <h4 className={classes.author}>{editedAuthor}</h4>
      <p className={classes.title}>{title}</p>
      <img
        className={classes["story-image"]}
        src={img}
        alt={author}
        loading="lazy"
      />
      <div className={classes["image-hover"]}></div>
      <div className={classes.icons}>
        <FontAwesomeIcon icon={faPlay} className={classes.play} />
      </div>
    </Link>
  );
};

export default Story;

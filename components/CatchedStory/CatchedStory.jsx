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
  return (
    <div className={classes["catched-story"]}>
      <div className={classes.content}>
        <h2>
          Slowing-down-everyday-activities-to-make-one-second-last-for-one-hour
        </h2>
        <div className={classes.links}>
          <Link href="/">General</Link>
          <Link href="/everything">Everything</Link>
        </div>
        <div>
          <button>
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <div className={classes.icons}>
            <FontAwesomeIcon icon={faBookmark} />
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faPaperPlane} />
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
      <img src="" alt="" />
    </div>
  );
};

export default CatchedStory;

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import classes from "./Channel.module.scss";
const Channel = (props) => {
  return (
    <li className={classes.channel}>
      <Link>
        <img src="" alt="" />
        <div className={classes.words}>
          <h4></h4>
          <div className={classes.watch}>
            <FontAwesomeIcon icon={faEye} />
            <p>Watch</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Channel;

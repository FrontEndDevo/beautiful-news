import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import classes from "./Channel.module.scss";
const Channel = (props) => {
  const { headlineName: name, headlineImg: img } = props;
  return (
    <li className={classes.channel}>
      <Link href={name}>
        <div>
          <img src={img} alt={name} />
          <div className={classes.hover}></div>
        </div>
        <div className={classes.words}>
          <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
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

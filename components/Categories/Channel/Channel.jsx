import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import classes from "./Channel.module.scss";
const Channel = (props) => {
  const { headlineName: name, headlineImg: img } = props;
  return (
    <li className={classes.channel}>
      <Link href={name}>
        <img src={img} alt={name} />
        <div className={classes.words}>
          <h4>{name}</h4>
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

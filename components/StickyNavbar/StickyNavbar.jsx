import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./StickyNavbar.module.scss";
import { faDisplay, faRadio } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const StickyNavbar = () => {
  return (
    <div className={classes["sticky-navbar"]}>
      <Link href="/channels" className={classes.link}>
        <FontAwesomeIcon icon={faDisplay} />
        <span>Channels</span>
      </Link>
      <Link href="/everything" className={classes.link}>
        <FontAwesomeIcon icon={faRadio} />
        <span>Everything</span>
      </Link>
    </div>
  );
};

export default StickyNavbar;

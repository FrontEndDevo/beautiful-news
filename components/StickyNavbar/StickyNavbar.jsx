import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./StickyNavbar.module.scss";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
const StickyNavbar = () => {
  return (
    <div className={classes["sticky-navbar"]}>
      <Link href='/channels' className={classes.link}>
        <FontAwesomeIcon icon={faDisplay} />
        <span>Channels</span>
      </Link>
      <Link href="/a-dynamic-name" className={classes.link}>
        <FontAwesomeIcon icon={faUser} />
        <span>Account</span>
      </Link>
    </div>
  );
};

export default StickyNavbar;

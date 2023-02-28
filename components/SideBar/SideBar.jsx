import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faVimeo,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import classes from "./SideBar.module.scss";
const SideBar = () => {
  // To keep JSX lean ASAP.
  const contactIcons = (
    <div className={classes.icons}>
      {[faFacebook, faInstagram, faLinkedin, faYoutube, faVimeo].map((icon) => (
        <FontAwesomeIcon icon={icon} />
      ))}
    </div>
  );
  return (
    <aside className={classes["side-bar"]}>
      <div className={classes.content}>
        <div className={classes.tags}>
          <div className={classes["primary"]}>
            <Link href="/about">About</Link>
            <Link href="/">Submit a story</Link>
          </div>
          <div className={classes["secondary"]}>
            <Link href="/">Contact</Link>
            <Link href="/">Become a contributor</Link>
            <Link href="/">Terms of use</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Cookie Policy</Link>
          </div>
        </div>
        <div className={classes.buttons}>
          <button>Sign in</button>
          <button>Create Account</button>
        </div>
        <div className={classes["contact-us"]}>
          <h4>Find us on</h4>
          {contactIcons}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

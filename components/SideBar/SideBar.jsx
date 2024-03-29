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

/* There was an attempt to use ReactDOM.createPortals( SideBar ), but
there were many errors appear like: (referenceerror: document is not
defined || error: Target container is not a DOM element. nextjs) */
{
  // We were gonna make this div in _document.js in pages folder.
  /* <div id="aside" /> */
}
const SideBar = (props) => {
  // To keep JSX lean ASAP.
  const contactIcons = (
    <div className={classes.icons}>
      {[faFacebook, faInstagram, faLinkedin, faYoutube, faVimeo].map(
        (icon, index) => (
          <FontAwesomeIcon key={index} icon={icon} />
        )
      )}
    </div>
  );

  return (
    <aside
      className={`${classes["side-bar"]} ${
        props.showSideBar ? "" : classes["show-side-bar"]
      }`}
    >
      <div className={classes.content}>
        <div className={classes.tags}>
          <div className={classes["primary"]}>
            <Link href="/about">About</Link>
            <Link href="/submit-story">Submit a story</Link>
          </div>
          <div className={classes["secondary"]}>
            <Link href="/contact">Contact</Link>
            <Link href="/become-contributor">Become a contributor</Link>
            <Link href="/terms-use">Terms of use</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
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

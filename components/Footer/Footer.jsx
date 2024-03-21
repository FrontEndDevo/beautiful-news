import {
  faApple,
  faFacebookF,
  faGoogle,
  faInstagram,
  faLinkedin,
  faVimeoV,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import classes from "./Footer.module.scss";
const footerIcons = [faFacebookF, faInstagram, faYoutube, faLinkedin, faVimeoV];
const footerLinks = [
  "about",
  "terms use",
  "contact",
  "privacy policy",
  "cookie policy",
  "submit story",
  "become contributor",
];
const Footer = () => {
  const allIcons = footerIcons.map((icon, index) => (
    <FontAwesomeIcon key={index} icon={icon} />
  ));

  const allLinks = footerLinks.map((link, index) => (
    <Link
      key={index}
      href={link
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, "-")}
    >
      {link}
    </Link>
  ));

  return (
    <footer className={classes.footer}>
      <div className={classes["social-media"]}>
        <div className={classes.icons}>{allIcons}</div>
        <div className={classes.bottom}>
          <Link href="/" className={classes.logo}>
            {/* Here I used (PostImage) tool to create URL for my local image */}
            <img
              src="https://i.postimg.cc/1t8Z3bF7/icon.png"
              alt="navbar-icon"
            />
            <h4>
              Beautiful<span>News</span>
            </h4>
          </Link>
          <span className={classes.rights}>
            &copy; 2024 FrontEndDevo &lt; Beshoy Tag /&gt;
          </span>
        </div>
      </div>
      <div className={classes.pages}>
        <div className={classes.links}>{allLinks}</div>
        <div className={classes.apps}>
          <div className={classes.google}>
            <FontAwesomeIcon icon={faGoogle} />
            <span>
              google <br /> assistant
            </span>
          </div>
          <div className={classes.store}>
            <FontAwesomeIcon icon={faApple} />
            <span>
              <p>download on the</p> app store
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

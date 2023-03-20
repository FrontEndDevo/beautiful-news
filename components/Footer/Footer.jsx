import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faVimeoV,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import classes from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["social-media"]}>
        <div className={classes.icons}>
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faVimeoV} />
        </div>
        <div className={classes.logo}>
          {/* Here I used (PostImage) tool to create URL for my local image */}
          <img src="https://i.postimg.cc/1t8Z3bF7/icon.png" alt="navbar-icon" />
          <Link href="/">
            Beautiful<span>News</span>
          </Link>
        </div>
      </div>
      <div className={classes["image-hover"]}></div>
      <div className={classes.pages}>
        <Link href="about">about</Link>
        <Link href="submit a story">submit a story</Link>
        <Link href="contact">contact</Link>
        <Link href="become a contributor">become a contributor</Link>
        <Link href="terms of use">terms of use</Link>
        <Link href="privacy policy">privacy policy</Link>
        <Link href="cookie policy">cookie policy</Link>
        <Link href="sign in">sign in</Link>
        <Link href="create account">create account</Link>
      </div>
    </footer>
  );
};

export default Footer;

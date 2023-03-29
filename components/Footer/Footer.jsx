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
            &copy; 2023 FrontEndDevo &lt; Beshoy Tag /&gt;
          </span>
        </div>
      </div>
      <div className={classes.pages}>
        <div className={classes.links}>
          <Link href="about">about</Link>
          <Link href="become a contributor">become a contributor</Link>
          <Link href="cookie policy">cookie policy</Link>
          <Link href="submit a story">submit a story</Link>
          <Link href="terms-use">terms of use</Link>
          <Link href="sign in">sign in</Link>
          <Link href="contact">contact</Link>
          <Link href="privacy policy">privacy policy</Link>
          <Link href="create account">create account</Link>
        </div>
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

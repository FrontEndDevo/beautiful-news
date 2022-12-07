import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import classes from "./Header.module.scss";
const Header = () => {
  return (
    <div className={classes.header}>
      <div className="content">
        <h3>Today's beautiful news</h3>
        <h1>
          Meet the security guard protecting Cape Town’s children from hunger
        </h1>
        <div className="titles">
          <Link href="#">Community</Link>
          <Link href="#">South Africa</Link>
        </div>
        <button>
          <FontAwesomeIcon icon={faPlay} />
          <span>1:15</span>
        </button>
      </div>
      <img
        src="https://www.beautifulnews.com/sites/default/files/styles/header/public/story/image/MoosaIsmail_SecurityGuard-03025.jpg?h=3f2aa710&itok=cHl4-9NE"
        alt=""
      />
    </div>
  );
};

export default Header;

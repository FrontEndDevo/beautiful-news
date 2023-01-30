import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import classes from "./Header.module.scss";
import Shape from "../Shape/Shape";
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.content}>
        <h3>Today's beautiful news</h3>
        <h1>
          Meet the security guard protecting Cape Town’s children from hunger
        </h1>
        <div className={classes.titles}>
          <Link href="#">Community</Link>
          <Link href="#">South Africa</Link>
        </div>
        <button>
          <FontAwesomeIcon icon={faPlay} />
          <span>1:15</span>
        </button>
        <div className={classes.shape}>
          <Shape>
            <h4>
              sjackson@insider.com <br /> (Sarah Jackson)
            </h4>
          </Shape>
        </div>
      </div>
      <img
        src="https://www.androidheadlines.com/wp-content/uploads/2020/12/Servers.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;

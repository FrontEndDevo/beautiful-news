import classes from "./Navbar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className="L-H-S">
        <div className={classes.title}>
          {/* Here I used (PostImage) tool to create URL for my local image */}
          <img src="https://i.postimg.cc/1t8Z3bF7/icon.png" alt="" />
          <h1>
            <span>Beautiful</span>News
          </h1>
        </div>
        <div className={classes.pages}>
          <Link href="./">About</Link>
          <Link href="./">Channels</Link>
        </div>
      </div>
      <div className="R-H-S">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBars} />
        {/* <FontAwesomeIcon icon={faXmark} /> */}
      </div>
    </div>
  );
};

export default Navbar;

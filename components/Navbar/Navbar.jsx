import classes from "./Navbar.module.scss";
import myIcon from '../../assets/images/ico.webp';
import Link from "next/link";
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
          <Link>About</Link>
          <Link>Channels</Link>
        </div>
      </div>
      <div className="R-H-S">
        {/* Search icon //install fontawesome library */}
        <div className="menu"></div>
      </div>
    </div>
  );
};

export default Navbar;

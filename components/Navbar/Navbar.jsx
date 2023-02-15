import { useEffect, useState } from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const changeNavbarBackground = () => {
      setNavbarBackground(window.scrollY >= 200 ? true : false);
    };

    window.addEventListener("scroll", changeNavbarBackground);
  }, []);

  return (
    <div className={classes.navbar}>
      {navbarBackground && <div className={classes["navbar-bg"]}></div>}
      <div className={classes["L-H-S"]}>
        <div className={classes.title}>
          {/* Here I used (PostImage) tool to create URL for my local image */}
          <img src="https://i.postimg.cc/1t8Z3bF7/icon.png" alt="navbar-icon" />
          <Link href="./">
            Beautiful<span>News</span>
          </Link>
        </div>
        <ul className={classes.pages}>
          <li>
            <Link href="./">About</Link>
          </li>
          <li>
            <Link href="./channels">Channels</Link>
          </li>
        </ul>
      </div>
      <div className={classes["R-H-S"]}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBars} />
        {/* <FontAwesomeIcon icon={faXmark} /> */}
      </div>
    </div>
  );
};

export default Navbar;

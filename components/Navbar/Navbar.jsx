import { useEffect, useState } from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    const changeNavbarBackground = () => {
      setNavbarBackground(window.scrollY >= 200 ? true : false);
    };

    window.addEventListener("scroll", changeNavbarBackground);
  }, []);

  const showSearchBarHandler = () => {
    setShowSearchBar((prevState) => !prevState);
  };

  const blurSearchBarHandler = () => {
    setShowSearchBar(false);
  };

  const router = useRouter();
  console.log(router.pathname);

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
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onClick={showSearchBarHandler}
        />
        <FontAwesomeIcon icon={faBars} />
        {/* <FontAwesomeIcon icon={faXmark} /> */}
      </div>
      {showSearchBar && (
        <div className={classes["search-bar"]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="search"
            name="search"
            id="search"
            maxLength="150"
            autoFocus
            onBlur={blurSearchBarHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;

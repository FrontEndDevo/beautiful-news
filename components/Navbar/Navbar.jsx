import { useEffect, useState } from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../SideBar/SideBar";
import { useDispatch } from "react-redux";
import { searchActions } from "../../store/search-bar-slice";
const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const dispatch = useDispatch();

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
    dispatch(searchActions.getKeyword({ keyword: "" }));
  };

  const changeSearchBarHandler = (text) => {
    dispatch(searchActions.getKeyword({ keyword: text.target.value }));
  };

  const toggleSideBarHandler = () => {
    setSideBar((prevState) => !prevState);
  };

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
            <Link href="./about">About</Link>
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
        <div className={classes["side-bar"]}>
          <span
            className={`${classes["menu-icon"]} ${
              sideBar && classes["close-icon"]
            }`}
            onClick={toggleSideBarHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
          <SideBar showSideBar={sideBar} />
        </div>
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
            onChange={changeSearchBarHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;

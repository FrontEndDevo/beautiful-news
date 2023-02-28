import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import SideBar from "../SideBar/SideBar";
const Navbar = (props) => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  // Access router to get pathname of current page and filter news.
  const router = useRouter();

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
    router.pathname == "/everything"
      ? props.everythingPageSearchBar(null)
      : router.pathname == "/"
      ? props.generalHomePageSearchBar(null)
      : props.categoryIdPage(null);
  };

  const changeSearchBarHandler = (text) => {
    router.pathname == "/everything"
      ? props.everythingPageSearchBar(text.target.value.toLowerCase())
      : router.pathname == "/"
      ? props.generalHomePageSearchBar(text.target.value.toLowerCase())
      : props.categoryIdPage(text.target.value.toLowerCase());
  };

  const showSideBarHandler = () => {
    setSideBar(true);
  };
  const hideSideBarHandler = (answer) => {
    setSideBar(answer);
  };

  return (
    <>
      {/* {ReactDOM.createPortal(<SideBar showSideBar={ sideBar} />, document.getElementById("aside"))} */}
      <SideBar showSideBar={sideBar} closeSideBar={hideSideBarHandler} />
      <div className={classes.navbar}>
        {navbarBackground && <div className={classes["navbar-bg"]}></div>}
        <div className={classes["L-H-S"]}>
          <div className={classes.title}>
            {/* Here I used (PostImage) tool to create URL for my local image */}
            <img
              src="https://i.postimg.cc/1t8Z3bF7/icon.png"
              alt="navbar-icon"
            />
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
          <FontAwesomeIcon icon={faBars} onClick={showSideBarHandler} />
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
    </>
  );
};

export default Navbar;

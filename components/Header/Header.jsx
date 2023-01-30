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
        src="https://www.mckinsey.com/~/media/mckinsey/industries/automotive%20and%20assembly/our%20insights/why%20the%20economics%20of%20electrification%20make%20this%20decarbonization%20transition%20different/why%20the%20economics%20of%20electrification%20make%20this%20decarbonization%20transition%20different_1401495101_standard_1536x1536.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;

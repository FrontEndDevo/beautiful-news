import classes from "./Navbar.module.scss";
import icon from "../../assets/images/navbar-icon.png";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <img src={icon} alt="" />
      <h2>Navbar</h2>
    </div>
  );
};

export default Navbar;

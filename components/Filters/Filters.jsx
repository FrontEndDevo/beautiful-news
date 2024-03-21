import { faAngleDown, faSliders } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import classes from "./Filters.module.scss";
import Sort from "./Options/Sort";
import Keyword from "./Options/Keyword/Keyword";
import Languages from "./Options/Languages";
import PageSize from "./Options/PageSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filters = () => {
  const [areFiltersOpen, setAreFiltersOpen] = useState(false);

  return (
    <div className={classes["all-filters"]}>
      <div
        onClick={() => setAreFiltersOpen((prevState) => !prevState)}
        className={classes["filters-gate"]}
      >
        <div className={classes["L-H-S"]}>
          <FontAwesomeIcon icon={faSliders} />
          <h4>Filters</h4>
        </div>
        <div className={classes.arrow}>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={areFiltersOpen ? classes.open : classes.close}
          />
        </div>
      </div>
      <div
        className={`${classes.filters} ${
          areFiltersOpen ? classes.show : classes.hide
        }`}
      >
        <Keyword />
        <Sort />
        <Languages />
        <PageSize />
        <button className={classes.apply}>Apply</button>
      </div>
    </div>
  );
};

export default Filters;

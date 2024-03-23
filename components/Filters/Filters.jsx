import { faAngleDown, faSliders } from "@fortawesome/free-solid-svg-icons";
import { memo, useEffect, useState } from "react";
import classes from "./Filters.module.scss";
import Sort from "./Options/Sort";
import Keyword from "./Options/Keyword/Keyword";
import Languages from "./Options/Languages";
import PageSize from "./Options/PageSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../store/filters-slice";

const Filters = memo(() => {
  const [areFiltersOpen, setAreFiltersOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Reset all filters when the component is mounted.
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetFilters());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={classes["all-filters"]}>
      {!isMobile && (
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
      )}
      <div
        className={`${classes.filters} ${
          !isMobile ? (areFiltersOpen ? classes.show : classes.hide) : null
        }`}
      >
        <div className={classes.div1}>
          <Keyword />
        </div>
        <div className={classes.div2}>
          <Sort />
        </div>
        <div className={classes.div3}>
          <Languages />
        </div>
        <div className={classes.div4}>
          <PageSize />
        </div>
      </div>
    </div>
  );
});

export default Filters;

import React, { useState } from "react";
import classes from "./Sort.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const sortOptions = ["publishedAt", "relevancy", "popularity"];

const Sort = ({ chooseSortByOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to handle the selected option:
  const selectOptionHandler = (option) => {
    setIsDropdownOpen(false);
    chooseSortByOption(option);
  };

  const allOptions = sortOptions.map((opt, i) => (
    <li key={i} onClick={() => selectOptionHandler(opt)}>
      {opt}
    </li>
  ));

  return (
    <div className={classes.sort}>
      <div
        onClick={() => setIsDropdownOpen((prevState) => !prevState)}
        className={classes.topic}
      >
        <h4>Sort by</h4>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <ul
        className={`${classes.options} ${
          isDropdownOpen ? classes["show-dropdown"] : classes["hide-dropdown"]
        }`}
      >
        {allOptions}
      </ul>
    </div>
  );
};

export default Sort;

import { useState } from "react";
import classes from "./Dropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const Dropdown = ({ label, options, getSelectedOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  // Function to handle the selected option:
  const selectOptionHandler = (option) => {
    getSelectedOption(option);
    setIsDropdownOpen(false);
    setSelectedOption(option);
  };

  const allOptions = options.map((opt, i) => (
    <li key={i} onClick={() => selectOptionHandler(opt)}>
      {opt}
    </li>
  ));

  return (
    <div className={classes.dropdown}>
      <div
        onClick={() => setIsDropdownOpen((prevState) => !prevState)}
        className={classes.title}
      >
        <h4>{selectedOption ? selectedOption : label}</h4>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={isDropdownOpen ? classes.open : classes.close}
        />
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

export default Dropdown;

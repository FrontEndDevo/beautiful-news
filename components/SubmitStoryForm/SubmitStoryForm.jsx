import classes from "./SubmitStoryForm.module.scss";
import countries from "../../assets/JSON/Countries Codes.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const SubmitStoryForm = () => {
  const [dropdownList, setDropdownList] = useState(false);

  // Render all country names in a select tag:
  const locationCountries = (
    <select className={classes.countries}>
      {countries.map((country) => (
        <option value={country.name}>{country.name}</option>
      ))}
    </select>
  );

  // To render country (flag - name - code):
  const countriesCodes = (
    <ul className={classes["countries-codes"]}>
      {countries.map((country) => (
        <li>
          <img
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code.toUpperCase()}.svg`}
            alt={country.name}
          />
          <p>
            {country.name} ({country.code})
          </p>
          <span>{country.dialling_code}</span>
        </li>
      ))}
    </ul>
  );

  // Toggle dropdown unordered list. 
  const toggleDropdownListHandler = () => {
    setDropdownList((prevState) => !prevState);
  };

  // Render the previous select with telephone input:
  const nationalPhoneNumber = (
    <div className={classes.phoneNumber}>
      <div
        className={classes["empty-flag"]}
        onClick={toggleDropdownListHandler}
      >
        <span></span>
        {dropdownList ? (
          <FontAwesomeIcon icon={faCaretUp} />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} />
        )}
      </div>
      {dropdownList && countriesCodes}
      <input
        type="tel"
        name="phone number"
        id="phone"
        placeholder="Your phone number (optional)"
      />
    </div>
  );

  return (
    <div className={classes["submit-story"]}>
      <div className={classes.text}>
        <h2>Submit your story</h2>
        <p>
          We want to hear from you. If you have a positive,
          <br /> uplifting or inspiring story to share about yourself or
          <br /> someone you know, let us know using the form below.
          <br /> We’ll be in touch.
        </p>
      </div>
      <form className={classes.form}>
        <div className={classes.inputs}>
          <input
            type="text"
            placeholder="My name Is*"
            name="story-name"
            id="story-name"
            className={classes.name}
          />
          <input
            type="email"
            placeholder="Email*"
            name="story-email"
            id="story-email"
            className={classes.email}
          />
          {locationCountries}
          {nationalPhoneNumber}
        </div>
        <textarea
          className={classes["your-story"]}
          name="story"
          id="story"
          rows="10"
          placeholder="Your story*"
        />
        <div className={classes.buttons}>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default SubmitStoryForm;

import classes from "./SubmitStoryForm.module.scss";
import countries from "../../assets/JSON/countries.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useReducer, useRef, useState } from "react";
import Country from "./Country/Country";

const initialSubmitStoryReducer = {
  name: "",
  email: "",
  country: "",
  phoneNumber: "",
  story: "",
  agreement: false,
};

const submitStoryReducer = (state, action) => {
  switch (action.type) {
    case "ALLINPUTS":
      return {
        name: action.payload.name,
        email: action.payload.email,
        country: action.payload.country,
        phoneNumber: action.payload.phoneNumber,
        story: action.payload.story,
        agreement: action.payload.agreement,
      };
  }
};

const SubmitStoryForm = () => {
  const [dropdownList, setDropdownList] = useState(false);
  const [choosenCountry, setChoosenCountry] = useState(null);

  // This reducer to store all inputs values:
  const [inputs, dispatch] = useReducer(
    submitStoryReducer,
    initialSubmitStoryReducer
  );

  // Our refs to get inputs values:
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const countryInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const storyInputRef = useRef();
  const checkboxInputRef = useRef();

  // Render all country names in a select tag:
  const locationCountries = (
    <select className={classes.countries} ref={countryInputRef}>
      {countries.map((country) => (
        <option value={country.name}>{country.name}</option>
      ))}
    </select>
  );

  // To render country (flag - name - code):
  const countriesCodes = (
    <ul className={classes["countries-codes"]}>
      {countries.map((country, index) => (
        <Country
          chooseThisCountry={() => setChoosenCountry(countries[index])}
          name={country.name}
          code={country.code}
          dialling_code={country.dialling_code}
        />
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
        {choosenCountry ? (
          <img
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${choosenCountry.code.toUpperCase()}.svg`}
            alt={choosenCountry.name}
          />
        ) : (
          <span></span>
        )}
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
        defaultValue={choosenCountry && choosenCountry.dialling_code}
        ref={phoneNumberInputRef}
      />
    </div>
  );

  console.log(choosenCountry);

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
            ref={storyInputRef}
          />
          <input
            type="email"
            placeholder="Email*"
            name="story-email"
            id="story-email"
            className={classes.email}
            ref={emailInputRef}
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

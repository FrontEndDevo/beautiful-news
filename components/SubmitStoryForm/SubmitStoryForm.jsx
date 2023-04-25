import classes from "./SubmitStoryForm.module.scss";
import countries from "../../assets/JSON/countries.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faFaceFrown,
} from "@fortawesome/free-solid-svg-icons";
import { useReducer, useRef, useState } from "react";
import Country from "./Country/Country";
import Link from "next/link";

const initialSubmitStoryReducer = {
  name: "",
  email: "",
  country: "Location",
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
    case "RESET":
      return {
        name: "",
        email: "",
        country: "Location",
        phoneNumber: "",
        story: "",
        agreement: false,
      };
  }
};

const SubmitStoryForm = () => {
  const [dropdownList, setDropdownList] = useState(false);
  const [choosenCountry, setChoosenCountry] = useState(null);
  // To know when we are gonna show error messages to user.
  const [isFormSubmmited, setIsFormSubmmited] = useState(false);

  // This reducer to store all inputs values:
  const [inputs, dispatch] = useReducer(
    submitStoryReducer,
    initialSubmitStoryReducer
  );

  // Our refs to get inputs values:
  const [
    nameInputRef,
    emailInputRef,
    countryInputRef,
    phoneNumberInputRef,
    storyInputRef,
    checkboxInputRef,
  ] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // Error messages for empty input fields:
  const nameError = isFormSubmmited && inputs.name.length == 0;

  const emailError = isFormSubmmited && inputs.email.length == 0;

  const countryError = isFormSubmmited && inputs.country == "Location";

  const storyError = isFormSubmmited && inputs.story.length == 0;

  const agreementError = isFormSubmmited && !inputs.agreement;

  // Render all country names in a select tag:
  const locationCountries = (
    <div className={classes.input}>
      <select
        className={`${classes.countries} ${
          countryError && classes["error-filed"]
        }`}
        ref={countryInputRef}
        defaultValue="Location"
      >
        <option disabled value="Location">
          Location
        </option>
        {countries.map((country) => (
          <option value={country.name}>{country.name}</option>
        ))}
      </select>
      {countryError && <p className={classes.error}>enter your location</p>}
    </div>
  );

  // To render country (flag - name - code):
  const countriesCodes = (
    <ul className={classes["countries-codes"]}>
      {countries.map((country, index) => (
        <Country
          chooseThisCountry={() => {
            phoneNumberInputRef.current.focus();
            setChoosenCountry(countries[index]);
          }}
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
    <div className={classes.input}>
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
    </div>
  );

  // Submit the story form:
  const submitStoryFormHandler = (e) => {
    // Prevent page reload or sending http request.
    e.preventDefault();

    setIsFormSubmmited(true);

    // Variables naming simplified:
    const valuesObj = {
      name: nameInputRef.current.value.trim(),
      email: emailInputRef.current.value.trim(),
      country: countryInputRef.current.value.trim(),
      phoneNumber: phoneNumberInputRef.current.value.trim(),
      story: storyInputRef.current.value.trim(),
      agreement: checkboxInputRef.current.checked,
    };

    // Store the values in our reducer:
    dispatch({
      type: "ALLINPUTS",
      payload: {
        name: valuesObj.name,
        email: valuesObj.email,
        country: valuesObj.country,
        phoneNumber: valuesObj.phoneNumber,
        story: valuesObj.story,
        agreement: valuesObj.agreement,
      },
    });

    // If all is right, let's print values in console for example:
    if (
      valuesObj.name &&
      valuesObj.email &&
      valuesObj.country != "Location" &&
      valuesObj.story &&
      valuesObj.agreement
    ) {
      console.log(valuesObj);

      setIsFormSubmmited(false);

      // Clear input fields:
      const defaultValues = {
        name: "",
        email: "",
        country: "Location",
        phoneNumber: "",
        story: "",
        agreement: false,
      };

      dispatch({
        type: "RESET",
      });
    }
  };

  return (
    <div className={classes["submit-story"]}>
      <div className={classes.text}>
        {(nameError ||
          emailError ||
          countryError ||
          storyError ||
          agreementError) && (
          <div className={classes["submmition-failure"]}>
            <h2>
              Sorry, something is not right
              <FontAwesomeIcon icon={faFaceFrown} />
            </h2>
            <p>
              Please try submitting this form again. If this problem
              <br />
              continues, please reach out to the site owner.
            </p>
          </div>
        )}
        <h2>Submit your story</h2>
        <p>
          We want to hear from you. If you have a positive,
          <br /> uplifting or inspiring story to share about yourself or
          <br /> someone you know, let us know using the form below.
          <br /> We’ll be in touch.
        </p>
      </div>
      <form onSubmit={submitStoryFormHandler} className={classes.form}>
        <div className={classes.inputs}>
          <div className={classes.input}>
            <input
              type="text"
              placeholder="My name Is*"
              name="story-name"
              id="story-name"
              ref={nameInputRef}
              className={`${nameError && classes["error-filed"]}`}
            />
            {nameError && <p className={classes.error}>enter your name</p>}
          </div>
          <div className={classes.input}>
            <input
              type="email"
              placeholder="Email*"
              name="story-email"
              id="story-email"
              ref={emailInputRef}
              className={`${emailError && classes["error-filed"]}`}
            />
            {emailError && <p className={classes.error}>enter your email</p>}
          </div>
          {locationCountries}
          {nationalPhoneNumber}
        </div>
        <div className={classes.input}>
          <textarea
            name="story"
            id="story"
            rows="10"
            placeholder="Your story*"
            ref={storyInputRef}
            className={`${classes["your-story"]} ${
              storyError && classes["error-filed"]
            }`}
          />
        </div>
        <div className={classes.buttons}>
          <button>Send</button>
          <div className={classes.checking}>
            <input
              ref={checkboxInputRef}
              type="checkbox"
              name="agreement"
              id="agreement"
            />
            <span
              className={`${classes.checkmark} ${
                agreementError && classes["error-filed"]
              }`}
            ></span>
          </div>
          <p>
            I agree with the{" "}
            <Link href="terms of use">Terms and Conditions</Link>
          </p>
          {agreementError && (
            <p className={classes["agreement-error"]}>
              * &ensp; agree with our terms
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SubmitStoryForm;

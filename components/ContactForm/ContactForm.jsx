import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useReducer, useRef, useState } from "react";
import classes from "./ContactForm.module.scss";
const initialContactFormReducer = {
  name: "",
  email: "",
  message: "",
  interest: "I am interested in",
  agreement: false,
};

const contactFormReducer = (state, action) => {
  switch (action.type) {
    case "MULTIPLEINPUTS":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        message: action.payload.message,
        interest: action.payload.interest,
        agreement: action.payload.agreement,
      };
    case "CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return initialContactFormReducer;
  }
};
const ContactForm = () => {
  // This reducer to store all inputs values:
  const [inputs, dispatch] = useReducer(
    contactFormReducer,
    initialContactFormReducer
  );

  // Our refs to get inputs values:
  const [
    nameInputRef,
    emailInputRef,
    messageInputRef,
    interestInputRef,
    checkboxInputRef,
  ] = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  // These (onChange) methods to reset the values of input fields after submit the form.
  const changeNameInputHandler = (value) => {
    dispatch({ type: "CHANGE", field: "name", value: value.target.value });
  };
  const changeEmailInputHandler = (value) => {
    dispatch({ type: "CHANGE", field: "email", value: value.target.value });
  };
  const changeMessageInputHandler = (value) => {
    dispatch({ type: "CHANGE", field: "message", value: value.target.value });
  };
  const changeInterestInputHandler = (value) => {
    dispatch({ type: "CHANGE", field: "interest", value: value.target.value });
  };
  const changeCheckboxHandler = (value) => {
    dispatch({
      type: "CHANGE",
      field: "agreement",
      value: value.target.checked,
    });
  };

  // To know when we are gonna show error messages to user.
  const [isFormSubmmited, setIsFormSubmmited] = useState(false);

  // Error messages for empty input fields:
  const nameError = isFormSubmmited && inputs.name.length == 0;

  const emailError = isFormSubmmited && inputs.email.length == 0;

  const interestError =
    isFormSubmmited && inputs.interest == "I am interested in";

  const agreementError = isFormSubmmited && !inputs.agreement;

  // Submit the contact form:
  const submitContactFormHandler = (e) => {
    // Prevent page reload || sending http request.
    e.preventDefault();

    setIsFormSubmmited(true);

    // Variables naming simplified:
    const valuesObj = {
      name: nameInputRef.current.value.trim(),
      email: emailInputRef.current.value.trim(),
      message: messageInputRef.current.value.trim(),
      interest: interestInputRef.current.value.trim(),
      agreement: checkboxInputRef.current.checked,
    };

    // Store the values in our reducer:
    dispatch({
      type: "MULTIPLEINPUTS",
      payload: {
        name: valuesObj.name,
        email: valuesObj.email,
        message: valuesObj.message,
        interest: valuesObj.interest,
        agreement: valuesObj.agreement,
      },
    });

    // If all is right, let's print values in console for example:
    if (
      valuesObj.agreement &&
      valuesObj.name &&
      valuesObj.email &&
      valuesObj.interest !== "I am interested in"
    ) {
      console.log(valuesObj);

      setIsFormSubmmited(false);

      dispatch({
        type: "RESET",
      });
    }
  };

  return (
    <div className={classes.contact}>
      <div className={classes.text}>
        {(nameError || emailError || interestError || agreementError) && (
          <div className={classes["submmition-failure"]}>
            <h2>
              Sorry, something is not right
              <FontAwesomeIcon icon={faFaceFrown} />
            </h2>
            <p>
              Please try submitting this form again. If this problem continues,
              please reach out to the site owner.
            </p>
          </div>
        )}
        <div className={classes["contact-us"]}>
          <h2>Contact Beautiful News</h2>
          <p>
            If you have a question, comment, or suggestion, please send us a
            message we'd love to hear from you.
          </p>
        </div>
      </div>
      <form onSubmit={submitContactFormHandler} className={classes.form}>
        <div className={classes.inputs}>
          <div className={classes.input}>
            <input
              value={inputs.name}
              onChange={changeNameInputHandler}
              ref={nameInputRef}
              type="text"
              name="name"
              id="name"
              placeholder="My name is*"
              className={`${nameError && classes["error-filed"]}`}
            />
            {nameError && <p className={classes.error}>enter your name</p>}
          </div>
          <div className={classes.input}>
            <select
              value={inputs.interest}
              onChange={changeInterestInputHandler}
              ref={interestInputRef}
              name="reson-for-contact"
              id="reson"
              defaultValue="I am interested in"
              className={`${interestError && classes["error-filed"]}`}
            >
              <option disabled value="I am interested in">
                I am interested in*
              </option>
              <option value="career opportunities">career opportunities</option>
              <option value="collaboration">collaboration</option>
              <option value="other">other</option>
            </select>
            {interestError && (
              <p className={classes.error}>select your reason of contacting</p>
            )}
          </div>
          <div className={classes.input}>
            <input
              value={inputs.email}
              onChange={changeEmailInputHandler}
              ref={emailInputRef}
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
              className={`${emailError && classes["error-filed"]}`}
            />
            {emailError && <p className={classes.error}>enter your email</p>}
          </div>
        </div>
        <div className={classes.input}>
          <textarea
            className={classes.textarea}
            value={inputs.message}
            onChange={changeMessageInputHandler}
            ref={messageInputRef}
            name="message"
            id="message"
            rows="5"
            placeholder="Your message (optional)"
          />
        </div>
        <div className={classes.buttons}>
          <button>Send</button>
          <div className={classes.checking}>
            <input
              checked={inputs.agreement}
              onChange={changeCheckboxHandler}
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

export default ContactForm;

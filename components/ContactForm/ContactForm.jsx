import Link from "next/link";
import { useReducer, useRef, useState } from "react";
import classes from "./ContactForm.module.scss";
const initialContactFormReducer = {
  name: "",
  email: "",
  message: "",
  interest: "",
  agreement: false,
};

const contactFormReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.value,
      };
    case "EMAIL":
      return {
        ...state,
        email: action.value,
      };
    case "MESSAGE":
      return {
        ...state,
        message: action.value,
      };
    case "INTEREST":
      return {
        ...state,
        interest: action.value,
      };
    case "MULTIPLEINPUTS":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        message: action.payload.message,
        interest: action.payload.interest,
        agreement: action.payload.agreement,
      };
  }
};
const ContactForm = () => {
  // This reducer to store all inputs values:
  const [inputs, dispatch] = useReducer(
    contactFormReducer,
    initialContactFormReducer
  );

  // Our refs to get inputs values:
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const interestInputRef = useRef();
  const checkboxInputRef = useRef();

  // To know when we are gonna show error messages to user.
  const [isFormSubmmited, setIsFormSubmmited] = useState(false);

  // Submit the contact form:
  const submitContactFormHandler = (e) => {
    // Prevent page reload || sending http request.
    e.preventDefault();

    setIsFormSubmmited(true);

    // Store the values in our reducer:
    dispatch({
      type: "MULTIPLEINPUTS",
      payload: {
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        message: messageInputRef.current.value,
        interest: interestInputRef.current.value,
        agreement: checkboxInputRef.current.checked,
      },
    });
  };
  console.log(inputs);

  // Error messages for empty and invalid inputs:
  const nameError =
    isFormSubmmited && inputs.name.length == 0 ? (
      <p className={classes["name-error"]}>enter your name</p>
    ) : null;

  const emailError =
    isFormSubmmited && inputs.email.length == 0 ? (
      <p className={classes["email-error"]}>enter your email</p>
    ) : null;

  const interestError =
    isFormSubmmited && inputs.interest.length == 0 ? (
      <p className={classes["interest-error"]}>
        select your reason of contacting
      </p>
    ) : null;

  const agreementError =
    isFormSubmmited && !inputs.agreement ? (
      <p className={classes["agreement-error"]}>agree with our terms</p>
    ) : null;

  return (
    <div className={classes.contact}>
      <div className={classes.text}>
        <h2>contact beautiful news</h2>
        <p>
          If you have a question, comment, or suggestion, please <br /> send us
          a message we'd love to hear from you.
        </p>
      </div>
      <form onSubmit={submitContactFormHandler} className={classes.form}>
        <div className={classes.inputs}>
          <input
            ref={nameInputRef}
            type="text"
            name="name"
            id="name"
            placeholder="My name is*"
          />
          <select ref={interestInputRef} name="reson-for-contact" id="reson">
            <option disabled value="I am interested in">
              I am interested in*
            </option>
            <option value="career opportunities">career opportunities</option>
            <option value="collaboration">collaboration</option>
            <option value="other">other</option>
          </select>
          <input
            ref={emailInputRef}
            type="email"
            name="email"
            id="email"
            placeholder="Email*"
          />
        </div>
        <textarea
          className={classes.textarea}
          ref={messageInputRef}
          name="message"
          id="message"
          rows="5"
          placeholder="Your message (optional)"
        />
        <div className={classes.buttons}>
          <button>Send</button>
          <div className={classes.checking}>
            <input
              ref={checkboxInputRef}
              type="checkbox"
              name="agreement"
              id="agreement"
            />
            <span className={classes.checkmark}></span>
          </div>
          <p>
            I agree with the{" "}
            <Link href="terms of use">Terms and Conditions</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

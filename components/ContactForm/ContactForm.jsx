import Link from "next/link";
import { useReducer, useRef } from "react";
import classes from "./ContactForm.module.scss";
const initialContactFormReducer = {
  name: "",
  nameIsEmpty: null,
  email: "",
  emailIsEmpty: null,
  message: "",
  interest: "",
};

const contactFormReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.value,
        nameIsEmpty: false,
      };
    case "EMAIL":
      return {
        ...state,
        email: action.value,
        emailIsEmpty: false,
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
        nameIsEmpty: false,
        email: action.payload.email,
        emailIsEmpty: false,
        message: action.payload.message,
        interest: action.payload.interest,
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

  // Submit the contact form:
  const submitContactFormHandler = (e) => {
    // Prevent page reload || sending http request.
    e.preventDefault();

    // Store the values in our reducer:
    dispatch({
      type: "MULTIPLEINPUTS",
      payload: {
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        message: messageInputRef.current.value,
        interest: interestInputRef.current.value,
      },
    });
  };
  console.log(inputs);

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
            required
          />

          <select
            ref={interestInputRef}
            name="reson-for-contact"
            id="reson"
            required
          >
            <option selected value="I am interested in">
              I am interested in*
            </option>
            <option value="career opportunities">career opportunities</option>
            <option value="collaboration">collaboration</option>
            <option value="other">other</option>
          </select>
          <input
            ref={emailInputRef}
            type="email"
            name=""
            id=""
            placeholder="Email*"
            required
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
            <input type="checkbox" name="agreement" id="agreement" required />
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

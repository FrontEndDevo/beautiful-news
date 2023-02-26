import { useReducer } from "react";
import classes from "./Inbox.module.scss";
const initialInputs = {
  firstName: "",
  firstNameIsEmpty: false,
  lastName: "",
  lastNameIsEmpty: false,
  email: "",
  emailIsEmpty: false,
};

const inputsReducer = (state, action) => {
  switch (action.type) {
    case "FIRST_NAME":
      return {
        ...state,
        firstName: action.value,
        firstNameIsEmpty: !action.value,
      };
    case "LAST_NAME":
      return {
        ...state,
        lastName: action.value,
        lastNameIsEmpty: !action.value,
      };
    case "EMAIL":
      return {
        ...state,
        email: action.value,
        emailIsEmpty: !action.value,
      };
    default:
      return initialInputs;
  }
};
const Inbox = () => {
  // This reducer to get values of input fields & detect if fields are empty.
  const [inputFields, dispatch] = useReducer(inputsReducer, initialInputs);

  // onChange functions for (First - Last - Email) input fields:
  const changeFirstNameHandler = (firstName) => {
    dispatch({ type: "FIRST_NAME", value: firstName.target.value.trim() });
  };
  const changeLastNameHandler = (lastName) => {
    dispatch({ type: "LAST_NAME", value: lastName.target.value.trim() });
  };
  const changeEmailHandler = (email) => {
    dispatch({ type: "EMAIL", value: email.target.value.trim() });
  };

  const submitSubscribtionHandler = (e) => {
    e.preventDefault();
    if (
      !inputFields.firstNameIsEmpty &&
      !inputFields.lastNameIsEmpty &&
      !inputFields.emailIsEmpty
    ) {
      dispatch({ type: "RESET" });
      console.log(inputFields);
    }
  };

  const requiredMsg = (
    <p className={classes.required}>This field is required.</p>
  );

  // Simple (regular-expression) to validate the E-mail:
  const emailRegex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]/gi;

  return (
    <div className={classes.inbox}>
      <div className={classes.title}>
        <h2>
          <span>Reframe</span> your inbox
        </h2>
        <p>
          Subscribe to our newsletter
          <br />
          and never miss a story
        </p>
      </div>
      <form onSubmit={submitSubscribtionHandler} className={classes.subscribe}>
        <div className={classes.field}>
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="First Name"
            value={inputFields.firstName}
            onChange={changeFirstNameHandler}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "First Name")}
          />
          {inputFields.firstNameIsEmpty && requiredMsg}
        </div>
        <div className={classes.field}>
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Last Name"
            value={inputFields.lastName}
            onChange={changeLastNameHandler}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Last Name")}
          />
          {inputFields.lastNameIsEmpty && requiredMsg}
        </div>
        <div className={classes.field}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={inputFields.email}
            onChange={changeEmailHandler}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Enter your email")}
          />
          {inputFields.emailIsEmpty && requiredMsg}
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Inbox;

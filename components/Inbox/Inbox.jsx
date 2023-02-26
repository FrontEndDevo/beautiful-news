import { useReducer } from "react";
import classes from "./Inbox.module.scss";
const initialInputs = {
  firstNameIsEmpty: false,
  lastNameIsEmpty: false,
  emailIsEmpty: false,
};

const inputsReducer = (state, action) => {
  switch (action.type) {
    case "FIRST_NAME":
      return { ...state, firstNameIsEmpty: !firstNameIsEmpty };
    case "LAST_NAME":
      return { ...state, lastNameIsEmpty: !lastNameIsEmpty };
    case "EMAIL":
      return { ...state, emailIsEmpty: !emailIsEmpty };
    default:
      return state;
  }
};
const Inbox = () => {
  const [inputFields, dispatch] = useReducer(inputsReducer, initialInputs);
  const requiredMsg = (
    <p className={classes.required}>This field is required.</p>
  );
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
      <form className={classes.subscribe}>
        <div className={classes.field}>
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="First Name"
          />
        </div>
        <div className={classes.field}>
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Last Name"
          />
        </div>
        <div className={classes.field}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Inbox;

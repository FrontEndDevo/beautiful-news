import classes from "./Inbox.module.scss";
const Inbox = () => {
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

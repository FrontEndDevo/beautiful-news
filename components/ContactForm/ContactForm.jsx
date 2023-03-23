import Link from "next/link";
import classes from "./ContactForm.module.scss";
const ContactForm = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.text}>
        <h2>contact beautiful news</h2>
        <p>
          If you have a question, comment, or suggestion, please <br /> send us
          a message we'd love to hear from you.
        </p>
      </div>
      <form className={classes.form}>
        <div className={classes.inputs}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="My name is*"
            required
          />

          <select name="reson-for-contact" id="reson" required>
            <option selected value="I am interested in">
              I am interested in*
            </option>
            <option value="career opportunities">career opportunities</option>
            <option value="collaboration">collaboration</option>
            <option value="other">other</option>
          </select>
          <input type="email" name="" id="" placeholder="Email*" required />
        </div>
        <textarea
          className={classes.textarea}
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

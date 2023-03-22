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
            placeholder="My name is"
            required
          />
          <select name="reson-for-contact" id="reson" required>
            <option value="I am interested in">I am interested in</option>
            <option value="career opportunities">career opportunities</option>
            <option value="collaboration">collaboration</option>
            <option value="other">other</option>
          </select>
          <input type="email" name="" id="" placeholder="Email" required />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message (optional)"
          />
        </div>
        <div className={classes.buttons}>
          <button>Send</button>
          <div className={classes.checking}>
            <input type="checkbox" name="" id="" required />
            <p>
              I agree with the{" "}
              <Link href="terms of use">Terms and Conditions</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

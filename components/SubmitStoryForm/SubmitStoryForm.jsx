import classes from "./SubmitStoryForm.module.scss";
import countries from "../../assets/JSON/Countries Codes.json";
const SubmitStoryForm = () => {
  // Render all country names in a select tag:
  const locationCountries = (
    <select className={classes.countries}>
      {countries.map((country) => (
        <option>{country.name}</option>
      ))}
    </select>
  );

  // To render country (flag - name - code):
  const countriesCodes = (
    <select className={classes["countries-codes"]}>
      {countries.map((country) => (
        <option>
          <img
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code.toLowerCase()}.svg`}
            alt={country.name}
          />
          <h6>
            {country.name} ({country.code})
          </h6>
          <p>{country.dialling_code}</p>
        </option>
      ))}
    </select>
  );

  // Render the previous select with telephone input:
  const nationalPhoneNumber = (
    <div className={classes.phoneNumber}>
      {countriesCodes}
      <input type="tel" name="phone number" id="phone" />
    </div>
  );
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
      <form>
        <input type="text" name="story-name" id="story-name" />
        <input type="email" name="story-email" id="story-email" />
        {locationCountries}
        {nationalPhoneNumber}
        <textarea name="story" id="story" rows="10"></textarea>
        <div className={classes.buttons}>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default SubmitStoryForm;

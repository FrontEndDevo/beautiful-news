import countries from "../../assets/JSON/countries.json";
import classes from "./ContributorForm.module.scss";
const ContributorForm = () => {
  const locationCountries = (
    <div className={classes.input}>
      <select className={classes.countries} defaultValue="Location">
        <option disabled value="Location">
          Location
        </option>
        {countries.map((country) => (
          <option value={country.name}>{country.name}</option>
        ))}
      </select>
    </div>
  );

  return (
    <section className={classes.contributor}>
      <div className={classes.text}>
        <div className={classes["contributor-title"]}>
          <h2>Become a contributor</h2>
          <p>
            Join us in telling positive and uplifting stories. If you have
            content to contribute that could inspire the world, let us know
            below and we’ll be in touch.
          </p>
        </div>
      </div>
      <form className={classes.form}>
        <div className={classes.inputs}>
          <div className={classes.input}>
            <input
              type="text"
              placeholder="My name Is*"
              name="contributor-name"
              id="contributor-name"
            />
          </div>
          <div className={classes.input}>
            <input
              type="email"
              placeholder="Email*"
              name="contributor-email"
              id="contributor-email"
            />
          </div>
          {locationCountries}
          <div className={classes.input}>
            <input
              type="text"
              placeholder="Link to your portfolio or blog (optional)"
              name="contributor-blog"
              id="contributor-blog"
            />
          </div>
        </div>
        <div className={`${classes.input} ${classes["upload-photo"]}`}>
          <label htmlFor="upload-photo">
            Upload photo (optional)
            <span>Choose file</span>
          </label>
          <input
            type="file"
            accept="image/*"
            placeholder="Upload photo (optional)"
            name="upload-photo"
            id="upload-photo"
          />
        </div>
        <div className={classes.options}>
          <h4>I want to (multiple options are possible)</h4>
          <ul className={classes["I-want"]}>
            <li>
              <div className={classes.checking}>
                <input type="checkbox" name="story-idea" id="story-idea" />
                <span className={classes.checkmark}></span>
              </div>
              <p>Submit a story idea</p>
            </li>
            <li>
              <div className={classes.checking}>
                <input type="checkbox" name="Submit-story" id="Submit-story" />
                <span className={classes.checkmark}></span>
              </div>
              <p>Submit a story</p>
            </li>
            <li>
              <div className={classes.checking}>
                <input type="checkbox" name="Edit-story" id="Edit-story" />
                <span className={classes.checkmark}></span>
              </div>
              <p>Edit a story</p>
            </li>
          </ul>
        </div>
        <div className={`${classes.input} ${classes.message}`}>
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Additional message (optional)"
            className={classes["additional message"]}
          />
        </div>
        <button className={classes.submit}>Submit</button>
      </form>
    </section>
  );
};

export default ContributorForm;

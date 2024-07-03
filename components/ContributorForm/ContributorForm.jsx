import { useReducer, useState } from "react";
import countries from "../../assets/JSON/countries.json";
import classes from "./ContributorForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";

const initialContributorFormReducer = {
  name: "",
  email: "",
  country: "Location",
  blog: "",
  photo: "Upload photo (optional)",
  storyIdea: false,
  submitStory: false,
  editStory: false,
  message: "",
};

const contributorFormReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialContributorFormReducer;
  }
};

const ContributorForm = () => {
  const [inputs, dispatch] = useReducer(
    contributorFormReducer,
    initialContributorFormReducer
  );
  const [isFormSubmmited, setIsFormSubmmited] = useState(false);

  // All onChange events for all inputs:
  const updateNameInputHandler = (value) => {
    dispatch({ type: "UPDATE", field: "name", value: value.target.value });
  };
  const updateEmailInputHandler = (value) => {
    dispatch({ type: "UPDATE", field: "email", value: value.target.value });
  };
  const updateCountryInputHandler = (value) => {
    dispatch({ type: "UPDATE", field: "country", value: value.target.value });
  };
  const updateBlogInputHandler = (value) => {
    dispatch({ type: "UPDATE", field: "blog", value: value.target.value });
  };

  const updatePhotoInputHandler = (value) => {
    const photo = value.target.files[0];

    dispatch({
      type: "UPDATE",
      field: "photo",
      value: photo.name,
    });
  };

  const updateStoryIdeaHandler = (value) => {
    dispatch({
      type: "UPDATE",
      field: "storyIdea",
      value: value.target.checked,
    });
  };
  const updateSubmitStoryHandler = (value) => {
    dispatch({
      type: "UPDATE",
      field: "submitStory",
      value: value.target.checked,
    });
  };
  const updateEditStoryHandler = (value) => {
    dispatch({
      type: "UPDATE",
      field: "editStory",
      value: value.target.checked,
    });
  };
  const updateMessageInputHandler = (value) => {
    dispatch({ type: "UPDATE", field: "message", value: value.target.value });
  };

  // Error messages for empty input fields:
  const nameError = isFormSubmmited && inputs.name.length == 0;

  const emailError = isFormSubmmited && inputs.email.length == 0;

  const countryError = isFormSubmmited && inputs.country == "Location";

  const storyOptionsError =
    isFormSubmmited &&
    !(inputs.storyIdea || inputs.editStory || inputs.submitStory);

  // Render all countries:
  const locationCountries = (
    <div className={classes.input}>
      <select
        value={inputs.country}
        className={`${classes.countries} ${
          countryError && classes["error-filed"]
        }`}
        defaultValue="Location"
        onChange={updateCountryInputHandler}
      >
        <option disabled value="Location">
          Location
        </option>
        {countries.map((country, i) => (
          <option key={i} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      {countryError && <p className={classes.error}>enter your location</p>}
    </div>
  );

  // Submit the form:
  const submitContributorFormHandler = (e) => {
    e.preventDefault();

    setIsFormSubmmited(true);

    // Get the contributor photo from localStorage:
    const contributorPhoto =
      inputs.photo.trim() != "Upload photo (optional)"
        ? localStorage.getItem("photo")
        : "";

    // Prepare the values to check them, then submit the form.
    const inputsValues = {
      name: inputs.name.trim(),
      email: inputs.email.trim(),
      country: inputs.country.trim() != "Location" ? inputs.country.trim() : "",
      blog: inputs.blog.trim(),
      photo: {
        name: inputs.photo != "Upload photo (optional)" ? inputs.photo : "",
        src: contributorPhoto,
      },
      storyIdea: inputs.storyIdea,
      submitStory: inputs.submitStory,
      editStory: inputs.editStory,
      message: inputs.message.trim(),
    };

    if (
      (inputsValues.name && inputsValues.email && inputsValues.storyIdea) ||
      inputsValues.submitStory ||
      inputsValues.editStory
    ) {
      console.log(inputsValues);

      setIsFormSubmmited(false);

      dispatch({
        type: "RESET",
      });

      localStorage.removeItem("photo");
    }
  };

  return (
    <section className={classes.contributor}>
      <div className={classes.text}>
        {(nameError || emailError || countryError || storyOptionsError) && (
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
        <div className={classes["contributor-title"]}>
          <h2>Become a contributor</h2>
          <p>
            Join us in telling positive and uplifting stories. If you have
            content to contribute that could inspire the world, let us know
            below and we’ll be in touch.
          </p>
        </div>
      </div>
      <form onSubmit={submitContributorFormHandler} className={classes.form}>
        <div className={classes.inputs}>
          <div className={classes.input}>
            <input
              value={inputs.name}
              type="text"
              placeholder="My name Is*"
              name="contributor-name"
              id="contributor-name"
              onChange={updateNameInputHandler}
              className={`${nameError && classes["error-filed"]}`}
            />
            {nameError && <p className={classes.error}>enter your name</p>}
          </div>
          <div className={classes.input}>
            <input
              value={inputs.email}
              type="email"
              placeholder="Email*"
              name="contributor-email"
              id="contributor-email"
              onChange={updateEmailInputHandler}
              className={`${emailError && classes["error-filed"]}`}
            />
            {emailError && <p className={classes.error}>enter your email</p>}
          </div>
          {locationCountries}
          <div className={classes.input}>
            <input
              value={inputs.blog}
              type="text"
              placeholder="Link to your portfolio or blog (optional)"
              name="contributor-blog"
              id="contributor-blog"
              onChange={updateBlogInputHandler}
            />
          </div>
        </div>
        <div className={`${classes.input} ${classes["upload-photo"]}`}>
          <label htmlFor="upload-photo">
            {inputs.photo}
            <span>Choose file</span>
          </label>
          <input
            type="file"
            accept="image/*"
            placeholder="Upload photo (optional)"
            name="upload-photo"
            id="upload-photo"
            onChange={updatePhotoInputHandler}
          />
        </div>
        <div className={classes.options}>
          <h4>I want to (multiple options are possible)</h4>
          <ul className={classes["I-want"]}>
            <li>
              <div className={classes.checking}>
                <input
                  checked={inputs.storyIdea}
                  type="checkbox"
                  name="story-idea"
                  id="story-idea"
                  onChange={updateStoryIdeaHandler}
                />
                <span
                  className={`${classes.checkmark} ${
                    storyOptionsError && classes["error-filed"]
                  }`}
                ></span>
              </div>
              <p>Submit a story idea</p>
            </li>
            <li>
              <div className={classes.checking}>
                <input
                  checked={inputs.submitStory}
                  type="checkbox"
                  name="Submit-story"
                  id="Submit-story"
                  onChange={updateSubmitStoryHandler}
                />
                <span
                  className={`${classes.checkmark} ${
                    storyOptionsError && classes["error-filed"]
                  }`}
                ></span>
              </div>
              <p>Submit a story</p>
            </li>
            <li>
              <div className={classes.checking}>
                <input
                  checked={inputs.editStory}
                  type="checkbox"
                  name="Edit-story"
                  id="Edit-story"
                  onChange={updateEditStoryHandler}
                />
                <span
                  className={`${classes.checkmark} ${
                    storyOptionsError && classes["error-filed"]
                  }`}
                ></span>
              </div>
              <p>Edit a story</p>
            </li>
          </ul>
          {storyOptionsError && (
            <p className={classes["checkbox-error"]}>
              at least one option is required
            </p>
          )}
        </div>
        <div className={`${classes.input} ${classes.message}`}>
          <textarea
            value={inputs.message}
            name="message"
            id="message"
            rows="10"
            placeholder="Additional message (optional)"
            className={classes["additional message"]}
            onChange={updateMessageInputHandler}
          />
        </div>
        <button className={classes.submit}>Submit</button>
      </form>
    </section>
  );
};

export default ContributorForm;

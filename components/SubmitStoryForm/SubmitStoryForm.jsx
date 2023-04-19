import classes from "./SubmitStoryForm.module.scss";
const SubmitStoryForm = () => {
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
    </div>
  );
};

export default SubmitStoryForm;

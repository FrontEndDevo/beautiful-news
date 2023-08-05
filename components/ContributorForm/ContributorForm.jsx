import classes from "./ContributorForm.module.scss";
const ContributorForm = () => {
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
    </section>
  );
};

export default ContributorForm;

import classes from "./Categories.module.scss";
const Categories = () => {
  return (
    <div className={classes.channels}>
      <h3>Beautiful News Channels to watch</h3>
      <ul className={classes.categories}></ul>
    </div>
  );
};

export default Categories;

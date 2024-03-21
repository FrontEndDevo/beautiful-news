import classes from "./Options.module.scss";
const Options = (props) => {
  return (
    <option className={classes.option} value={props.option}>
      {props.option}
    </option>
  );
};

export default Options;

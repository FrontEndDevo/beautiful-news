import classes from "./Options.module.scss";
const Options = (props) => {
  return <option value={props.option}>{props.option}</option>;
};

export default Options;

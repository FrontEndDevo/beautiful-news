import classes from "./Story.module.scss";
const Story = (props) => {
  const { author, title, img } = props;
  return (
    <div className={classes.story}>
      <h4>{author}</h4>
      <p>{title}</p>
      <img src={img} alt={author} />
    </div>
  );
};

export default Story;

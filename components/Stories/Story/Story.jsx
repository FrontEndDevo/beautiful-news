import classes from "./Story.module.scss";
const Story = (props) => {
  const { author, title, urlToImage: img } = props;
  return (
    <div className={classes.story}>
      <h4 className={classes.author}>{author}</h4>
      <p className={classes.title}>{title}</p>
      <img className={classes["story-image"]} src={img} alt={author} />
      <div className={classes["image-hover"]}></div>
    </div>
  );
};

export default Story;

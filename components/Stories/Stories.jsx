import classes from "./Stories.module.scss";
import Story from "./Story/Story";
const Stories = (props) => {
  const filteredNews = props.news.filter((item) => item.urlToImage !== null);
  const allStories = filteredNews.map((story) => (
    <Story
      key={
        story.source.id
          ? story.source.id
          : story.key
          ? story.source.name
          : story.author
      }
      author={story.author}
      title={story.title}
      urlToImage={story.urlToImage}
    />
  ));
  return (
    <div className={classes.stories}>
      <h3>Worldwide News</h3>
      <div className={classes["rendered-stories"]}>{allStories}</div>
    </div>
  );
};

export default Stories;

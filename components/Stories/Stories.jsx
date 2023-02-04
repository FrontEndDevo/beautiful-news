import classes from "./Stories.module.scss";
import Story from "./Story/Story";
const Stories = (props) => {
  // Filter news which have no urlToImages.
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
      author={story.author ? story.author : "Unknown Author"}
      title={story.title}
      urlToImage={story.urlToImage}
    />
  ));
  return (
    <div className={classes.stories}>
      <h3>Worldwide News</h3>
      <div className={classes["rendered-stories"]}>
        {props.news.length > 0 ? (
          allStories
        ) : (
          <p className={classes["no-news"]}>
            oops... There are no news at this moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default Stories;

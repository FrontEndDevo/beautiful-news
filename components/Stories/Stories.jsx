import classes from "./Stories.module.scss";
import Story from "./Story/Story";
const Stories = ({ news, everything = false, keyword = "Tesla" }) => {
  // Filter duplicated stories:
  const filteredNews = [...new Set(news)];
  const allStories = filteredNews.map((story, index) => (
    <Story
      key={index}
      author={story.author ? story.author : "Unknown Author"}
      title={story.title ? story.title : "No Title"}
      urlToImage={
        story.urlToImage
          ? story.urlToImage
          : "https://www.linkpicture.com/q/image-not-found-1-scaled.png"
      }
    />
  ));

  return (
    <div className={classes.stories}>
      <h3>
        {everything
          ? `Everything We Know About < ${
              keyword.charAt(0).toUpperCase() + keyword.slice(1)
            } >`
          : "Worldwide News"}
      </h3>
      <div className={classes["rendered-stories"]}>
        {news.length > 0 ? (
          allStories
        ) : (
          <p className={classes["no-news"]}>
            oops...There are no news at this moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default Stories;

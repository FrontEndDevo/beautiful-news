import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import classes from "./Stories.module.scss";
import Story from "./Story/Story";
const Stories = ({ news, everything = false, keyword = "Tesla" }) => {
  // Fetching stored news from redux-store.
  const reduxNews = useSelector((news) =>
    everything ? news.everything : news.headlines
  );

  // Router to get current URL except everything page because we have everything property from props:
  const router = useRouter();

  // Detect which category page are we on now.
  const whichCategoryPage =
    router.pathname == "/" ? "general" : router.query.categoryId;

  console.log(whichCategoryPage);
  console.log(reduxNews);

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

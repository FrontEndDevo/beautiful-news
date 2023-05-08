import { useSelector } from "react-redux";
import { detectAndFetch } from "../../helpers/detectAndFetch";
import classes from "./Stories.module.scss";
import Story from "./Story/Story";
const Stories = ({
  everything = false,
  keyword = "Tesla",
  filteredStories = [],
}) => {
  // Detect the page we on now and fetch the correct news from redux-store.
  const fetchCorrectNews = detectAndFetch();

  // These are the approved news we will work on:
  const rightCurrentNews =
    filteredStories.length != 0 ? filteredStories : fetchCorrectNews;

  // Fetch searched story from redux-store.
  const searchedKeyword = useSelector(
    (keyword) => keyword.search.searchedKeyword
  );

  // Filter the news we have in this page ang get the searched story:
  const filteredRightNews = rightCurrentNews.filter((item) =>
    item.title.toLowerCase().includes(searchedKeyword)
  );

  // Filter duplicated stories:
  const filteredNews = [
    ...new Set(searchedKeyword ? filteredRightNews : rightCurrentNews),
  ];
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
    <main className={classes.stories}>
      <h3>
        {everything
          ? `Everything We Know About <  ${
              keyword.charAt(0).toUpperCase() + keyword.slice(1)
            } />`
          : "Worldwide News"}
      </h3>
      <div className={classes["rendered-stories"]}>
        {allStories.length > 0 ? (
          allStories
        ) : (
          <p className={classes["no-news"]}>
            oops...There are no news at this moment.
          </p>
        )}
      </div>
    </main>
  );
};

export default Stories;

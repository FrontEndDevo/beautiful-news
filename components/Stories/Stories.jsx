import { useSelector } from "react-redux";
import { detectAndFetch } from "../../helpers/detectAndFetch";
import classes from "./Stories.module.scss";
import Story from "./Story/Story";
const Stories = ({
  everything = false,
  keyword = "Google",
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
    <Story key={index} story={story} />
  ));

  return (
    <main className={classes.stories}>
      <div className={classes.title}>
        <h3>
          {everything
            ? `Everything We Know About <  ${
                keyword.charAt(0).toUpperCase() + keyword.slice(1)
              } />`
            : "Worldwide News"}
        </h3>
        {everything && (
          <p>
            Total Results: <span>{allStories.length}</span>
          </p>
        )}
      </div>

      {allStories.length > 0 ? (
        <div className={classes["rendered-stories"]}>allStories</div>
      ) : (
        <p className={classes["no-news"]}>
          oops...There are no news at this moment.
        </p>
      )}
    </main>
  );
};

export default Stories;

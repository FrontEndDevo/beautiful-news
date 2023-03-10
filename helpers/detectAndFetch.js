import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// This method was supposed to be written in Stories.jsx & Header.jsx,
// but we extract the logic here (D.R.Y).
export const detectAndFetch = (everything = false) => {
  // Router to get current URL except everything page because we have everything property from props:
  const router = useRouter();

  // Detect which category page are we on now.
  const whichCategoryPage =
    router.pathname == "/" ? "general" : router.query.categoryId;

  // Fetching stored news from redux-store.
  const fetchedNewsFromRedux = useSelector((news) =>
    everything
      ? news.everything.articles
      : news.headlines.headlines.filter(
          (cat) => cat.category == whichCategoryPage
        )[0].articles
  );
  return fetchedNewsFromRedux;
};

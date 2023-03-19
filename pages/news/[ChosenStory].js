import Navbar from "../../components/Navbar/Navbar";
import CatchedStory from "../../components/CatchedStory/CatchedStory";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const ChosenStory = () => {
  const router = useRouter();
  // Fetching all news from redux-store:
  const headlines = useSelector((state) => state.headlines.headlines);
  const everything = useSelector((state) => state.everything);

  // Catch the clicked story using (high-ordered-function (FILTER)):
  const catchedStory = [
    ...headlines[0].articles,
    ...everything.articles,
  ].filter(
    (chosenOne) =>
      chosenOne.title.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s/g, "-") ==
      router.query.chosenStory
  )[0];

  return (
    <>
      <Navbar />
      <CatchedStory story={catchedStory} />
    </>
  );
};

export default ChosenStory;

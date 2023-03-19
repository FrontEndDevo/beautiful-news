import Navbar from "../../components/Navbar/Navbar";
import CatchedStory from "../../components/CatchedStory/CatchedStory";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const ChosenStory = () => {
  const router = useRouter();
  // Fetching all news from redux-store:
  const headlines = useSelector((state) => state.headlines.headlines);
  const everything = useSelector((state) => state.everything.articles);

  // Catch the clicked story using (high-ordered-function (FILTER)):
  const catchedStory = [...headlines[0].articles, ...everything].filter(
    (chosenOne) =>
      chosenOne.title.replace(/\s/g, "-") == router.query.ChosenStory
  )[0];

  console.log(catchedStory);

  return (
    <>
      <Navbar />
      <CatchedStory />
    </>
  );
};

export default ChosenStory;

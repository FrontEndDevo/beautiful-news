import Navbar from "../../components/Navbar/Navbar";
import CatchedStory from "../../components/CatchedStory/CatchedStory";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
const ChosenStory = () => {
  // Fetching all news from redux-store:
  const headlines = useSelector((state) => state.headlines.headlines);
  const everything = useSelector((state) => state.everything);

  const router = useRouter();

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
      <Head>
        <title>{`${
          catchedStory.title ? catchedStory.title : "Title"
        } | News | Beautiful News`}</title>
        <meta
          name="description"
          content={`${
            catchedStory.content ? catchedStory.content : "Content"
          } | News section | Beautiful News`}
        />
      </Head>
      <Navbar />
      <CatchedStory story={catchedStory} />
      <Footer />
    </>
  );
};

export default ChosenStory;

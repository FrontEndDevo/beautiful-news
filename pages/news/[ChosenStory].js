import Navbar from "../../components/Navbar/Navbar";
import CatchedStory from "../../components/CatchedStory/CatchedStory";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
const ChosenStory = () => {
  const router = useRouter();
  // Fetching all news from redux-store:
  const headlines = useSelector((state) => state.headlines.headlines);
  const everything = useSelector((state) => state.everything);

  // A default object (set default values) to solve problems like: can't read property of undefined.
  const defaultStory = {
    title: "",
    author: "",
    content: "",
    description: "",
    urlToImage: "",
    url: "",
    source: { id: 0, name: "" },
  };

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
          catchedStory.title ? catchedStory.title : defaultStory.title
        } | News | Beautiful News`}</title>
        <meta
          name="description"
          content={`${
            catchedStory.content ? catchedStory.content : defaultStory.content
          } | News section | Beautiful News`}
        />
      </Head>
      <Navbar />
      <CatchedStory story={catchedStory ? catchedStory : defaultStory} />
      <Footer />
    </>
  );
};

export default ChosenStory;

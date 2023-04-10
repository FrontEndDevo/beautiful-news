import Navbar from "../../components/Navbar/Navbar";
import CatchedStory from "../../components/CatchedStory/CatchedStory";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
const ChosenStory = () => {
  const [finalStory, setFinalStory] = useState({});

  const router = useRouter();

  // Fetching all news from redux-store:
  const everything = useSelector((state) => state.everything);
  /*
  First headlines: Our reducer function that subscribed to the Store.
  Second headlines: Our headlines-array that holds all different categories.
  We use "Map" to extract each articles-array of different categories.
  */
  const headlines = useSelector((state) => state.headlines.headlines).map(
    (item) => item.articles
  );

  // Catch the clicked story using (high-ordered-function (FILTER)):
  useEffect(() => {
    const fetchTheStory = async () => {
      // Descover if We only have one array for one category (e.g sports) or more than one array for different categories (e.g sports, general)
      const newHeadlinesArr = [];
      const newHeadlines =
        headlines.length == 1
          ? headlines[0]
          : headlines.map((headlineArr) =>
              newHeadlinesArr.push(...headlineArr)
            );

      const finalHeadlines =
        newHeadlinesArr.length > 0 ? newHeadlinesArr : newHeadlines;
      const catchedStory = await [
        ...finalHeadlines,
        ...everything.articles,
      ].filter(
        (chosenOne) =>
          chosenOne.title.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s/g, "-") ==
          router.query.chosenStory
      )[0];

      setFinalStory(catchedStory);
    };

    fetchTheStory();
  }, []);

  console.log(finalStory);

  return (
    <>
      <Head>
        <title>{`${
          finalStory && finalStory.title ? finalStory.title : "No Title"
        } | News | Beautiful News`}</title>
        <meta
          name="description"
          content={`${
            finalStory && finalStory.content ? finalStory.content : "No Content"
          } | News section | Beautiful News`}
        />
      </Head>
      <Navbar />
      {finalStory && <CatchedStory story={finalStory} />}
      <Footer />
    </>
  );
};

export default ChosenStory;

import Navbar from "../../components/Navbar/Navbar";
import CatchedStory from "../../components/CatchedStory/CatchedStory";
import { useSelector } from "react-redux";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
const ChosenStory = () => {
  const finalStory = useSelector((state) => state.story.choosenStory);

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

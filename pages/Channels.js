import Head from "next/head";
import Categories from "../components/Categories/Categories";
import Navbar from "../components/Navbar/Navbar";
import { TOP_HEADLINES } from "../components/Headlines/Headlines";
const Channels = () => {
  return (
    <>
      <Head>
        <title>Channels to watch | Beautiful News</title>
        <meta
          name="description"
          content="Now you can watch all the different channels in our website."
        />
      </Head>
      <Navbar />
      <Categories />
    </>
  );
};

export default Channels;

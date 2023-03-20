import Head from "next/head";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
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
      <Footer />
    </>
  );
};

export default Channels;

import Head from "next/head";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | Beautiful News</title>
        <meta name="description" content="Read more about Beautiful News" />
      </Head>
      <Navbar />
      <About />
      <Footer />
    </>
  );
};

export default AboutPage;

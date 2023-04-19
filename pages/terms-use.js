import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TermsOfUse from "../components/TermsOfUse/TermsOfUse";
import Head from "next/head";
const Terms = () => {
  return (
    <>
      <Head>
        <title>Terms Of Use | Beautiful News</title>
        <meta
          name="description"
          content="These Terms should be read"
        />
      </Head>
      <Navbar />
      <TermsOfUse />
      <Footer />
    </>
  );
};

export default Terms;

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import Head from "next/head";
const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Beautiful News</title>
        <meta
          name="description"
          content="This Privacy Policy should be read together with our Website Terms and Conditions. All terms and conditions, including defined terms, of our Website Terms and Conditions"
        />
      </Head>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default Privacy;

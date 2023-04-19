import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CookiePolicy from "../components/CookiePolicy/CookiePolicy";
import Head from "next/head";
const Cookies = () => {
  return (
    <>
      <Head>
        <title>Cookie Policy | Beautiful News</title>
        <meta
          name="description"
          content="This is our cookie policy that should be read with our Website Terms and Conditions and our Privacy Policy"
        />
      </Head>
      <Navbar />
      <CookiePolicy />
      <Footer />
    </>
  );
};

export default Cookies;

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import Head from "next/head";
const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Beautiful News</title>
        <meta
          name="description"
          content="You can contact us if you have a problem, suggestion or complaint."
        />
      </Head>
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactUs;

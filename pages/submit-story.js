import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
const SubmitStory = () => {
  return (
    <>
      <Head>
        <title>SUBMIT YOUR STORY | Beautiful News</title>
        <meta
          name="description"
          content="Submit your story now, We want to hear from you. If you have a positive, uplifting or inspiring story to share about yourself or someone you know, let us know using the form below. We’ll be in touch."
        />
      </Head>
      <Navbar />
    
      <Footer />
    </>
  );
};

export default SubmitStory;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import ContributorForm from "../components/ContributorForm/ContributorForm";

const BecomeContributor = () => {
  return (
    <>
      <Head>
        <title>Become a contributor | Beautiful News</title>
        <meta
          name="description"
          content="Join us in telling positive and uplifting stories. If you have content to contribute that could inspire the world, let us know below and we’ll be in touch."
        />
      </Head>
      <Navbar />
      <ContributorForm />
      <Footer />
    </>
  );
};

export default BecomeContributor;

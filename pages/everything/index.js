import Head from "next/head";
import React from "react";
import Filter from "../../components/Filter/Filter";
import Navbar from "../../components/Navbar/Navbar";
import Stories from "../../components/Stories/Stories";

const Everything = ({ everythingNews }) => {
  const getFiltersHandler = (filtersObj) => {
    console.log(filtersObj);
  };
  return (
    <React.Fragment>
      <Head>
        <title>Everything | Beautiful News</title>
        <meta
          name="description"
          content="Discover all the news around a certain topic in all languages"
        />
      </Head>
      <Navbar />
      <Filter getFilters={getFiltersHandler} />
      <Stories news={everythingNews} everything={true} />
    </React.Fragment>
  );
};

export default Everything;

const EVERYTHING_API =
  "https://newsapi.org/v2/everything?apiKey=8804ae5da994436aa3ab963e0217fe73&q=google&language=en&pageSize=100&sortBy=publishedAt";
export async function getStaticProps() {
  const response = await fetch(EVERYTHING_API);
  const data = await response.json();
  const everythingData = [];
  for (const key in data.articles) {
    const article = {
      source: data.articles[key].source,
      author: data.articles[key].author,
      title: data.articles[key].title,
      description: data.articles[key].description,
      url: data.articles[key].url,
      urlToImage: data.articles[key].urlToImage,
      content: data.articles[key].content,
    };
    everythingData.push(article);
  }

  return {
    props: { everythingNews: everythingData },
    revalidate: 43200, // Will fetching new 'news' every 12 hours.
  };
}

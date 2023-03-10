import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Stories from "../components/Stories/Stories";
import Headlines, { TOP_HEADLINES } from "../components/Headlines/Headlines";
import Inbox from "../components/Inbox/Inbox";
import Head from "next/head";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { headlinesActions } from "../store/headlines-slice";
const SpecificCategory = ({ categoryNews, totalResults, categoryId }) => {
  // Store (Specific Category News) in headlines-slice.js
  const dispatch = useDispatch();
  dispatch(
    headlinesActions.headlineStore({
      category: categoryId,
      news: categoryNews,
      total: totalResults,
    })
  );
  return (
    <>
      <Head>
        <title>{`${
          categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
        } | Beautiful News`}</title>
        <meta
          name="description"
          content={`Discover all the news about ${categoryId} in all countries of the world in all possible languages`}
        />
      </Head>
      <Navbar />
      <Header allowTitles={true} />
      <Stories />
      <Headlines />
      <Inbox />
    </>
  );
};
export default SpecificCategory;

export async function getStaticPaths() {
  return {
    paths: TOP_HEADLINES.map((cat) => {
      return {
        params: {
          categoryId: cat.headline,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // Fetching news from our API:
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?pageSize=50&apiKey=8804ae5da994436aa3ab963e0217fe73&category=${context.params.categoryId}`
  );
  const categoryNews = await res.json();

  // Handling results and push them to an array.
  const loadedNews = [];
  if (categoryNews.totalResults > 0) {
    for (const key in categoryNews.articles) {
      loadedNews.push({
        source: categoryNews.articles[key].source,
        author: categoryNews.articles[key].author,
        title: categoryNews.articles[key].title,
        description: categoryNews.articles[key].description,
        url: categoryNews.articles[key].url,
        urlToImage: categoryNews.articles[key].urlToImage,
        content: categoryNews.articles[key].content,
      });
    }
  }

  return {
    props: {
      categoryNews: loadedNews,
      totalResults: categoryNews.totalResults,
      categoryId: context.params.categoryId,
    },
  };
}

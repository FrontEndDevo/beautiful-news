import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../../shared/Filters/Filters";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Stories from "../../components/Stories/Stories";
import { everythingNewsActions } from "../../store/everything-slice";
import LoaderSpinner from "../../shared/LoaderSpinner/LoaderSpinner";

const Everything = ({ everythingNews, totalResults }) => {
  // To store the required news after set filters by user and fetch them.
  const [newStories, setNewStories] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  // Get filters from the user and fetch the required news/stories.
  const { keyword, sortBy, language, pageSize } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    // Start fetching the required news/stories:
    const getFilteredNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?apiKey=${process.env.NEXT_PUBLIC_NEXT_API_KEY}&q=${keyword}&language=${language}&pageSize=${pageSize}&sortBy=${sortBy}`
        );
        const data = await response.json();

        const newNews = [];
        for (const key in data.articles) {
          newNews.push({
            source: data.articles[key].source,
            author: data.articles[key].author,
            title: data.articles[key].title,
            description: data.articles[key].description,
            url: data.articles[key].url,
            urlToImage: data.articles[key].urlToImage,
            content: data.articles[key].content,
          });
        }

        setNewStories({
          topic: keyword,
          articles: newNews,
          totalResults: data.totalResults,
        });
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
      setIsLoading(false);
    };
    getFilteredNews();
  }, [keyword, language, pageSize, sortBy]);

  // Set the head title for the page.
  const headTitle =
    keyword === "google"
      ? "Google | Everything | Beautiful News"
      : `${
          keyword.charAt(0).toUpperCase() + keyword.slice(1)
        } | Everything | Beautiful News`;

  // Store (Everything-News) in everything-slice.js.
  dispatch(
    everythingNewsActions.everythingStore({
      topic: newStories.topic || "google",
      news: newStories.articles ? newStories.articles : everythingNews,
      total: newStories.articles ? newStories.totalResults : totalResults,
    })
  );

  return (
    <React.Fragment>
      <Head>
        <title>{headTitle}</title>
        <meta
          name="description"
          content={`Discover all the news around ${
            keyword === "google" ? "Google" : keyword
          } in all languages`}
        />
      </Head>
      <Navbar />
      <Filters />
      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <Stories
          everything={true}
          keyword={newStories.topic}
          filteredStories={newStories.articles}
        />
      )}
      <Footer />
    </React.Fragment>
  );
};

export default Everything;

export async function getStaticProps() {
  const response = await fetch(
    `https://newsapi.org/v2/everything?apiKey=${process.env.NEXT_PUBLIC_NEXT_API_KEY}&q=google&language=en&pageSize=100&sortBy=publishedAt`
  );
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
    props: {
      everythingNews: everythingData,
      totalResults: data.totalResults || 0,
    },
    revalidate: 43200, // Will fetching new 'news' every 12 hours.
  };
}

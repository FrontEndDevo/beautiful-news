import Head from "next/head";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Stories from "../../components/Stories/Stories";
import { everythingNewsActions } from "../../store/everything-slice";

const Everything = ({ everythingNews, totalResults }) => {
  // To store the required news after set filters by user and fetch them.
  const [newStories, setNewStories] = useState({});
  const [filters, setFilters] = useState({});

  const getFiltersAndFetchNewsHandler = (filtersObj) => {
    setFilters(filtersObj);

    // use object destructuring to extract values:
    const { keyword, language, pageSize, sortBy } = filtersObj;

    // Start fetching the required news/stories:
    const getFilteredNews = async () => {
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
    };
    getFilteredNews();
  };

  const headTitle =
    Object.keys(filters).length > 0
      ? `${
          filters.keyword.charAt(0).toUpperCase() + filters.keyword.slice(1)
        } | Everything | Beautiful News`
      : "Google | Everything | Beautiful News";

  // Store (Everything-News) in everything-slice.js.
  const dispatch = useDispatch();

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
            Object.keys(filters).length > 0
              ? filters.keyword
              : "a certain topic"
          } in all languages`}
        />
      </Head>
      <Navbar />
      <Filters getFilters={getFiltersAndFetchNewsHandler} />
      <Stories
        everything={true}
        keyword={newStories.topic}
        filteredStories={newStories.articles}
      />
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
    props: { everythingNews: everythingData, totalResults: data.totalResults },
    revalidate: 43200, // Will fetching new 'news' every 12 hours.
  };
}

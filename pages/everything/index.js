import Head from "next/head";
import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import Navbar from "../../components/Navbar/Navbar";
import Stories from "../../components/Stories/Stories";

const Everything = ({ everythingNews }) => {
  // To store the required news after set filters by user and fetch them.
  const [newStories, setNewStories] = useState([]);
  const [filters, setFilters] = useState({});

  // This state to store filtered news which user search for:
  const [filteredNews, setFilteredNews] = useState([]);

  const getFiltersAndFetchNewsHandler = (filtersObj) => {
    setFilters(filtersObj);

    // use object destructuring to extract values:
    const { keyword, language, pageSize, sortBy } = filtersObj;

    // Start fetching the required news/stories:
    const getFilteredNews = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?apiKey=8804ae5da994436aa3ab963e0217fe73&q=${keyword}&language=${language}&pageSize=${pageSize}&sortBy=${sortBy}`
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
      setNewStories(newNews);
    };
    getFilteredNews();
  };

  const headTitle =
    Object.keys(filters).length > 0
      ? `${
          filters.keyword.charAt(0).toUpperCase() + filters.keyword.slice(1)
        } | Everything | Beautiful News`
      : "Google | Everything | Beautiful News";

  const filterNewsHandler = (searchedStory) => {
    const filteredStories =
      newStories.length > 0
        ? newStories.filter((item) =>
            item.title.toLowerCase().includes(searchedStory)
          )
        : everythingNews.filter((item) =>
            item.title.toLowerCase().includes(searchedStory)
          );

    console.log(filteredStories);
    setFilteredNews(filteredStories);
  };

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
      <Navbar everythingPageSearchBar={filterNewsHandler} />
      <Filter getFilters={getFiltersAndFetchNewsHandler} />
      <Stories
        news={
          filteredNews.length > 0
            ? filteredNews
            : newStories.length > 0
            ? newStories
            : everythingNews
        }
        everything={true}
        keyword={filters.keyword}
      />
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

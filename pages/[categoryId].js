import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Stories from "../components/Stories/Stories";
import Headlines, { TOP_HEADLINES } from "../components/Headlines/Headlines";
const SpecificCategory = ({ categoryNews }) => {
  return (
    <>
      <Navbar />
      <Header news={categoryNews} allowTitles={true} />
      <Stories news={categoryNews} />
      <Headlines />
    </>
  );
};
export default SpecificCategory;

export async function getStaticPaths() {
  const paths = TOP_HEADLINES.map((cat) => {
    return {
      params: {
        categoryId: cat,
      },
    };
  });

  return {
    paths,
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
        key,
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
    },
  };
}

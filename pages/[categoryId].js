import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Stories from "../components/Stories/Stories";
import { TOP_HEADLINES } from "../components/Headlines/Headlines";
const SpecificCategory = ({ categoryPosts }) => {
  console.log(categoryPosts);
  return (
    <>
      <Navbar />
      <Header news={categoryPosts} allowTitles={true} />
      <Stories news={categoryPosts} />
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
  const categoryPosts = await res.json();

  // Handling results and push them to an array.
  const loadedPosts = [];
  if (categoryPosts.totalResults > 0) {
    for (const key in categoryPosts.articles) {
      loadedPosts.push({
        key,
        source: categoryPosts.articles[key].source,
        author: categoryPosts.articles[key].author,
        title: categoryPosts.articles[key].title,
        description: categoryPosts.articles[key].description,
        url: categoryPosts.articles[key].url,
        urlToImage: categoryPosts.articles[key].urlToImage,
        content: categoryPosts.articles[key].content,
      });
    }
  }

  return {
    props: {
      categoryPosts: loadedPosts,
    },
  };
}

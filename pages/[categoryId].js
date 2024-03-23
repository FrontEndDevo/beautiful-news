import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Stories from "../components/Stories/Stories";
import Headlines, { TOP_HEADLINES } from "../components/Headlines/Headlines";
import Inbox from "../components/Inbox/Inbox";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { headlinesActions } from "../store/headlines-slice";
import Footer from "../components/Footer/Footer";
const SpecificCategory = ({ categoryNews, totalResults, categoryId }) => {
  // Check first if I have any news of this specific category/headline, if there are, don't store.
  const existingHeadline = useSelector((state) =>
    state.headlines.headlines.find(
      (headline) => headline.category == categoryId
    )
  );
  // Store (Specific Category/headline News) in headlines-slice.js if there aren't.
  const dispatch = useDispatch();
  if (!existingHeadline) {
    dispatch(
      headlinesActions.headlineStore({
        category: categoryId,
        news: categoryNews,
        total: totalResults,
      })
    );
  }

  const headlineCategory = existingHeadline
    ? existingHeadline.category
    : categoryId;

  const pageTitle =
    headlineCategory.charAt(0).toUpperCase() + categoryId.slice(1);

  return (
    <>
      <Head>
        <title>{`${pageTitle} | Beautiful News`}</title>
        <meta
          name="description"
          content={`Discover all the news about ${pageTitle} in all countries of the world in all possible languages`}
        />
      </Head>
      <Navbar />
      <Header />
      <Stories />
      <Headlines />
      <Inbox />
      <Footer />
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
    `https://newsapi.org/v2/top-headlines?pageSize=100&country=us&apiKey=${process.env.NEXT_PUBLIC_NEXT_API_KEY}&category=${context.params.categoryId}`
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
      totalResults: categoryNews.totalResults || 0,
      categoryId: context.params.categoryId,
    },
  };
}

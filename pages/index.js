import { useDispatch } from "react-redux";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Headlines, { TOP_HEADLINES } from "../components/Headlines/Headlines";
import Inbox from "../components/Inbox/Inbox";
import Navbar from "../components/Navbar/Navbar";
import { headlinesActions } from "../store/headlines-slice";
import HomeSlider from "../shared/HomeSlider/HomeSlider";
import StickyNavbar from "../components/StickyNavbar/StickyNavbar";

export default function Home({ allHeadlinesNews = [] }) {
  // Store different types of our News in headlines-slice store:
  const dispatch = useDispatch();
  allHeadlinesNews.map((headline) => {
    dispatch(headlinesActions.headlineStore(headline));
  });

  // Render all the different categories in the Home page:
  const allCategoriesSliders = allHeadlinesNews.map((headline, index) => (
    <HomeSlider key={index} news={headline.news} category={headline.category} />
  ));

  return (
    <>
      <Navbar />
      <Header isHomePage={true} />
      {allCategoriesSliders.length > 0 ? (
        allCategoriesSliders
      ) : (
        <p className="error">oops...Something went wrong!</p>
      )}
      <Headlines />
      <Inbox />
      <Footer />
      <StickyNavbar />
    </>
  );
}

export async function getStaticProps() {
  // Fetching different types of news from our API:
  const allHeadlinesNewsPromises = TOP_HEADLINES.map(async (category) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category.headline}&country=us&pageSize=100&apiKey=${process.env.NEXT_PUBLIC_NEXT_API_KEY}`
    );
    const data = await response.json();

    // Handling results and push them to an array.
    const loadedNews = [];
    if (data.totalResults > 0) {
      for (const key in data.articles) {
        loadedNews.push({
          source: data.articles[key].source,
          author: data.articles[key].author,
          title: data.articles[key].title,
          description: data.articles[key].description,
          url: data.articles[key].url,
          urlToImage: data.articles[key].urlToImage,
          content: data.articles[key].content,
        });
      }
    }

    return {
      category: category.headline,
      news: loadedNews,
      total: data.totalResults || 0,
    };
  });

  const allHeadlinesNews = await Promise.all(allHeadlinesNewsPromises);

  return {
    props: {
      allHeadlinesNews,
    },
    revalidate: 12 * 60 * 60, // Will fetching new 'news' every 12 hours.
  };
}

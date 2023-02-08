import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Stories from "../components/Stories/Stories";

export default function Home(props) {
  // console.log(props.news);
  return (
    <>
      <Navbar />
      <Header news={props.news} />
      <Stories news={props.news} />
    </>
  );
}

export async function getStaticProps() {
  // Fetching news from our API:
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2023-01-08&sortBy=publishedAt&apiKey=8804ae5da994436aa3ab963e0217fe73"
  );
  const data = await response.json();

  // Handling results and push them to an array.
  const loadedNews = [];
  if (data.totalResults > 0) {
    for (const key in data.articles) {
      loadedNews.push({
        key,
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
    props: {
      news: loadedNews,
    },
    revalidate: 43200, // Will fetching new 'news' every 12 hours.
  };
}

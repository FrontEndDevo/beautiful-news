import classes from "./Stories.module.scss";
import Story from "./Story/Story";
const DUMMY_NEWS = [
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
  {
    source: { id: null, name: "Marketscreener.com" },
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    title: "Ford to Cut Prices, Boost Production of EV Mustang Mach-E",
    urlToStory:
      "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/Ford-to-Cut-Prices-Boost-Production-of-EV-Mustang-Mach-E-42847481/?utm_medium=RSS&utm_content=20230130",
    author: "MarketScreener",
  },
];
const Stories = () => {
  const allStories = DUMMY_NEWS.map((story) => (
    <Story
      key={
        story.source.id
          ? story.source.id
          : story.source.name
          ? story.source.name
          : story.author
      }
      author={story.author}
      title={story.title}
      urlToImage={story.urlToImage}
    />
  ));
  return (
    <div className={classes.stories}>
      <h3>Latest News</h3>
      <div className={classes['rendered-stories']}>{allStories}</div>
    </div>
  );
};

export default Stories;

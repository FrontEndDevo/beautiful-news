import classes from "./Stories.module.scss";
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
  return (
    <div className={classes.stories}>
      <h3>Latest News</h3>
    </div>
  );
};

export default Stories;

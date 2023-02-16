const Everything = ({ everythingNews }) => {
  console.log(everythingNews);
  return <div>Everything</div>;
};

export default Everything;

const EVERYTHING_API =
  "https://newsapi.org/v2/everything?apiKey=8804ae5da994436aa3ab963e0217fe73&q=google&language=en&pageSize=50&sortBy=popularity";
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

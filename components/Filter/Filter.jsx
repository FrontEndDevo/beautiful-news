import classes from "./Filter.module.scss";
const languages = [
  "en",
  "ar",
  "de",
  "es",
  "fr",
  "he",
  "it",
  "nl",
  "no",
  "pt",
  "ru",
  "sv",
  "ud",
  "zh",
];

const sortBy = ["publishedAt", "relevancy", "popularity"];

const pageSize = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const Filter = () => {
  return <div className={classes.filter}>Filter</div>;
};

export default Filter;

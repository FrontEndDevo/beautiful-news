import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Filter.module.scss";
import Options from "./Options/Options";
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
  const renderedLanguages = languages.map((lang) => (
    <Options key={lang} option={lang} />
  ));
  const renderedSortBy = sortBy.map((item) => (
    <Options key={item} option={item} />
  ));
  const renderedPageSize = pageSize.map((size) => (
    <Options key={size} option={size} />
  ));
  return (
    <div className={classes.filter}>
      <FontAwesomeIcon icon={faFilter} />
      <div className={classes.inputs}>
        <input type="text" name="keyword" id="" />
        <select className={classes["sort-by"]} name="" id="">
          {renderedSortBy}
        </select>
        <div className={classes.short}>
          <select className={classes.languages} name="" id="">
            {renderedLanguages}
          </select>
          <select className={classes.size} name="" id="">
            {renderedPageSize}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;

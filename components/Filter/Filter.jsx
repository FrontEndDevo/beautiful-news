import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import classes from "./Filter.module.scss";
import Options from "./Options/Options";
const optionsObj = {
  languages: [
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
  ],
  sortBy: ["publishedAt", "relevancy", "popularity"],
  pageSize: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
};

const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);

  const showFiltersHandler = () => {
    setShowFilters((prev) => !prev);
  };
  const renderedLanguages = optionsObj.languages.map((lang) => (
    <Options key={lang} option={lang} />
  ));
  const renderedSortBy = optionsObj.sortBy.map((item) => (
    <Options key={item} option={item} />
  ));
  const renderedPageSize = optionsObj.pageSize
    .map((size) => <Options key={size} option={size} />)
    .reverse();
  return (
    <div className={classes.filter}>
      <FontAwesomeIcon
        onClick={showFiltersHandler}
        className={classes["filter-icon"]}
        icon={faFilter}
      />
      {showFilters && (
        <div className={classes.inputs}>
          <div className={classes["keyword-sort"]}>
            <div className={classes.keyword}>
              <label htmlFor="keyword">Keyword</label>
              <input
                type="text"
                name="keyword"
                id="keyword"
                placeholder="e.g. Google"
              />
            </div>

            <div className={classes["sort-by"]}>
              <p>Sorting By</p>
              <select name="sortby" id="sortby">
                {renderedSortBy}
              </select>
            </div>
          </div>
          <div className={classes["from-to"]}>
            <div className={classes.from}>
              <label htmlFor="from">From</label>
              <input type="date" name="from" id="from" />
            </div>
            <div className={classes.to}>
              <label htmlFor="to">To</label>
              <input type="date" name="to" id="to" />
            </div>
          </div>
          <div className={classes["language-sizes"]}>
            <div className={classes.languages}>
              <p>Languages</p>
              <select name="language" id="language">
                {renderedLanguages}
              </select>
            </div>
            <div className={classes.sizes}>
              <p>Page Size</p>
              <select name="size" id="size">
                {renderedPageSize}
              </select>
            </div>
          </div>
          <button className={classes.apply}>Apply</button>
        </div>
      )}
    </div>
  );
};

export default Filter;

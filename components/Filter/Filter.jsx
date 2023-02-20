import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
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

const Filter = (props) => {
  const [showFilters, setShowFilters] = useState(false);
  const [language, setLanguage] = useState("en");
  const [pageSize, setPageSize] = useState(100);
  const [sortBy, setSortBy] = useState("publishedAt");
  const keywordInputRef = useRef();
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

  // Functions to handle the values selected for each select tag:
  const changeSortByHandler = (sort) => {
    setSortBy(sort.target.value);
  };
  const changeLanguageHandler = (language) => {
    setLanguage(language.target.value);
  };
  const changePageSizeHandler = (size) => {
    setPageSize(size.target.value);
  };

  // Submit filters and send them to everything page to fetch the new news.
  const submitFiltrationHandler = (e) => {
    e.preventDefault();
    const filtersObject = {
      keyword: keywordInputRef.current.value.toLowerCase().trim() || "google",
      sortBy,
      language,
      pageSize,
    };
    props.getFilters(filtersObject);
  };
  return (
    <form onSubmit={submitFiltrationHandler} className={classes.filter}>
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
                ref={keywordInputRef}
                type="text"
                name="keyword"
                id="keyword"
                placeholder="e.g. Google"
              />
            </div>

            <div className={classes["sort-by"]}>
              <p>Sorting By</p>
              <select onChange={changeSortByHandler} name="sortby" id="sortby">
                {renderedSortBy}
              </select>
            </div>
          </div>
          <div className={classes["from-to"]}>
            <div className={classes.from}>
              <label htmlFor="from">From</label>
              <input disabled type="date" name="from" id="from" />
            </div>

            <div className={classes.to}>
              <label htmlFor="to">To</label>
              <input disabled type="date" name="to" id="to" />
            </div>
          </div>
          <div className={classes["language-sizes"]}>
            <div className={classes.languages}>
              <p>Languages</p>
              <select
                onChange={changeLanguageHandler}
                name="language"
                id="language"
              >
                {renderedLanguages}
              </select>
            </div>

            <div className={classes.sizes}>
              <p>Page Size</p>
              <select onChange={changePageSizeHandler} name="size" id="size">
                {renderedPageSize}
              </select>
            </div>
          </div>
          <button className={classes.apply}>Apply</button>
        </div>
      )}
    </form>
  );
};

export default Filter;

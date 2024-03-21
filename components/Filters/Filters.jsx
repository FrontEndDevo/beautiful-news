import { faFilter, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import classes from "./Filters.module.scss";
import Options from "./Options/Options";
import Sort from "./Options/Sort";
import Keyword from "./Options/Keyword/Keyword";
import Languages from "./Options/Languages";
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

const Filters = (props) => {
  const [showFilters, setShowFilters] = useState(false);
  const [language, setLanguage] = useState("en");
  const [pageSize, setPageSize] = useState(100);
  const [sortBy, setSortBy] = useState("publishedAt");
  const [keyword, setKeyword] = useState("google");

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

  const getSearchedKeywordHandler = (keyword) => {
    setKeyword(keyword);
  };

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
    <>
      <form onSubmit={submitFiltrationHandler} className={classes.filter}>
        <div className={classes["filter-icon"]}>
          <FontAwesomeIcon onClick={showFiltersHandler} icon={faFilter} />
          <div className={classes.arrows}>
            <p>Filters</p>
            <FontAwesomeIcon
              icon={faSortUp}
              onClick={showFiltersHandler}
              style={{
                transform: showFilters ? "rotate(1800deg)" : "rotate(180deg)",
              }}
            />
          </div>
        </div>
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
                <select
                  onChange={changeSortByHandler}
                  name="sortby"
                  id="sortby"
                >
                  {renderedSortBy}
                </select>
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
      <Sort />
      <Keyword getSearchedKeyword={getSearchedKeywordHandler} />
      <Languages />
    </>
  );
};

export default Filters;

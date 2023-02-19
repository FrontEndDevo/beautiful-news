import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  return (
    <div className={classes.filter}>
      <FontAwesomeIcon icon={faFilter} />
      <div className={classes.inputs}>
        <input type="text" name="keyword" id="" />
        <select className={classes["sort-by"]} name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <div className={classes.short}>
          <select className={classes.languages} name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <select className={classes.size} name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;

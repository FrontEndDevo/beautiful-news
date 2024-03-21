import classes from "./Keyword.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

const Keyword = ({ getSearchedKeyword }) => {
  const changeKeywordHandler = (e) => {
    getSearchedKeyword(e.target.value);
  };

  return (
    <div className={classes.keyword}>
      <input
        type="text"
        name="keyword"
        id="keyword"
        placeholder="e.g. Google"
        onChange={changeKeywordHandler}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default Keyword;
